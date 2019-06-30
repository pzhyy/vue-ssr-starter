const fs = require('fs')
const Koa = require('koa')
const path = require('path')
const serve = require('koa-static')
const browser = require('./browser')

const filename = path.resolve(__dirname, '../dist/index.html')
const content = fs.readFileSync(filename, 'utf-8')
const port = process.env.PORT || 3000

;(async () => {
  const app = new Koa()

  app.use(serve('dist'))

  app.use(
    await browser.render({
      timeout: 15000, // ms
      useCache: true
    })
  )

  app.use(ctx => {
    ctx.body = content
  })

  app.listen(port, () =>
    console.log(`Serve start at http://localhost:${port}`)
  )
})()
