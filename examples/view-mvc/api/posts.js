module.exports = ({ server }) => {
  return {
    getPosts(data) {
      return server.get('/posts', { params: data }).then(({ data }) => data)
    },

    getPostsById(data) {
      return server
        .get(`/posts/${data.id}`, { params: data })
        .then(({ data }) => data)
    }
  }
}
