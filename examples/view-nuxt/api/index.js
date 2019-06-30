import server from './server'
import posts from './posts'
import comments from './comments'

export default {
  posts: posts({ server }),
  comments: comments({ server })
}
