const Koa = require('koa')
const serve = require('koa-static')
const handlebars = require('koa-handlebars')
const helpers = require('./helpers/handlebars')
const router = require('./router')

const app = new Koa()
const port = process.env.PORT || 3000

app.use(serve('public/dist/'))

app.use(handlebars({
  layoutsDir: 'views/layouts/',
  partialsDir: 'views/partials/',
  defaultLayout: 'default',
  helpers
}))

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(port)
console.log(`Server started at http://localhost:${port}`)
