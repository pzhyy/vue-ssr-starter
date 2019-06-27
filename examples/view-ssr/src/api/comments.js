export default ({ server }) => {
  return {
    getComments(data) {
      return server.get("/comments", { params: data });
    },

    getCommentsById(data) {
      return server.get(`/comments/${data.id}`, { params: data });
    }
  };
};
