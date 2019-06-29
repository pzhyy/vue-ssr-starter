const Router = require('koa-router')
const posts = require('../controllers/posts')
const about = require('../controllers/about')

const router = new Router()

router.redirect('/', '/posts')
router.get('/posts', posts.index)
router.get('/posts/:id', posts.show)
router.get('/about', about.index)
router.get('/empty', ctx => {
  ctx.body = { empty: 'empty' }
})

module.exports = router
