module.exports = ({ server }) => {
  return {
    getComments(data) {
      return server.get('/comments', { params: data }).then(({ data }) => data)
    },

    getCommentsById(data) {
      return server
        .get(`/comments/${data.id}`, { params: data })
        .then(({ data }) => data)
    }
  }
}
