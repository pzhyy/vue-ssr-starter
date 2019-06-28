const api = require('../api')
const utils = require('../helpers/utils')

exports.index = async ctx => {
  const { page } = ctx.query

  const posts = await api.posts.getPosts({
    _page: page,
    _limit: 10,
    _expand: 'author'
  })

  const hotPosts = await api.posts.getPosts({
    _page: 8,
    _limit: 10,
    _expand: 'author'
  })

  const data = {
    seo: {
      title: 'HOME - View MVC',
      keywords: 'view mvc',
      description: 'This is a view mvc'
    },
    head: `
    <link rel="stylesheet" type="text/css" href="/css/chunk-240b60a0.043d2e6b.css">
    <script charset="utf-8" src="/js/chunk-240b60a0.2ee2b453.js"></script>
    <link rel="stylesheet" type="text/css" href="/css/chunk-86a2880e.c080ec7c.css">
    <script charset="utf-8" src="/js/chunk-86a2880e.893fdd2b.js"></script>
    `,
    active: 'Home',
    posts,
    hotPosts,
    prev: utils.getPrevPageUrl(ctx),
    next: utils.getNextPageUrl(ctx)
  }

  await ctx.render('posts', data)
}

exports.show = async ctx => {
  const { id } = ctx.params

  const post = await api.posts.getPostsById({
    id,
    _expand: 'author'
  })

  const comments = await api.comments.getComments({
    _page: 1,
    _limit: 10,
    _expand: 'user',
    postId: id
  })

  const hotPosts = await api.posts.getPosts({
    _page: 8,
    _limit: 10,
    _expand: 'author'
  })

  const data = {
    seo: {
      title: post.title,
      keywords: post.title,
      description: post.summary
    },
    head: `
    <link rel="stylesheet" type="text/css" href="/css/chunk-240b60a0.043d2e6b.css">
    <script charset="utf-8" src="/js/chunk-240b60a0.2ee2b453.js"></script>
    <link rel="stylesheet" type="text/css" href="/css/chunk-623a3140.c0310c5d.css">
    <script charset="utf-8" src="/js/chunk-623a3140.71c798e1.js"></script>
    `,
    active: 'Home',
    post,
    comments,
    hotPosts
  }

  await ctx.render('post', data)
}
