const server = require('./server')
const posts = require('./posts')
const comments = require('./comments')

module.exports = {
  posts: posts({ server }),
  comments: comments({ server })
}
