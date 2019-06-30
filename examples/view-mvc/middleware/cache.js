const LRU = require('lru-cache')

const defaultOptions = {
  debug: true,
  useCache: true,
  max: 1000,
  maxAge: 1000 * 60 * 15
}

module.exports = (options = {}) => {
  const config = { ...defaultOptions, ...options }
  const debug = config.debug ? (...args) => console.log(...args) : () => {}
  const cacheStore = new LRU(config)

  return async (ctx, next) => {
    const key = ctx.url

    debug('key:', key)

    if (!config.useCache) {
      debug('Cache closed')
      return
    }

    const cacheData = cacheStore.get(key)
    if (cacheData) {
      debug('Cache hit')
      ctx.body = cacheData
      return
    }

    await next()

    if (ctx.body) {
      cacheStore.set(key, ctx.body)
      debug(`Add the key '${key}' to cache store`)
    }
  }
}
