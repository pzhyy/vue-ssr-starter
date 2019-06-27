const debug = require('debug')('browser')
const puppeteer = require('puppeteer')
const LRU = require('lru-cache')

const defaultOptions = {
  timeout: 15000,
  useCache: true,
  cacheOptions: {
    max: 1000,
    maxAge: 15 * 60 * 1000 // ms
  }
}

module.exports.render = async options => {
  const config = { ...defaultOptions, ...options }
  const cache = new LRU(config.cacheOptions)
  const userAgent = 'Puppeteer'
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })

  debug('Browser started')

  const prerender = async (url, timeout) => {
    const page = await browser.newPage()

    page.on('request', request => {
      if (request.resourceType() === 'image') {
        request.abort()
      } else {
        request.continue()
      }
    })

    await page.setUserAgent(userAgent)
    await page.setRequestInterception(true)
    await page.goto(url, { waitUntil: 'networkidle2' })
    await page.waitFor(timeout)
    const content = await page.content()
    await page.close()

    return content
  }

  return (ctx, next) => {
    const startTime = Date.now()
    const url = ctx.request.href

    debug('Access url:', url)

    if (ctx.get('user-agent') === userAgent) {
      debug('Ignore User-Agent:', userAgent)
      return next()
    }

    if (config.useCache && cache.get(url)) {
      debug('Cache hit')
      debug('Render Elapsed: %s ms', Date.now() - startTime)
      return ctx.body = cache.get(url)
    }

    return prerender(url, config.timeout)
      .then(content => {
        if (config.useCache) {
          cache.set(url, content)
        }
        ctx.body = content
        debug('Render Elapsed: %s ms', Date.now() - startTime)
      })
      .catch(error => {
        debug('Render error:', error)
        ctx.throw(500)
      })
  }
}
