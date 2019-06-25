export default ({ server }) => {
  return {
    getPosts(data) {
      return server.get("/posts", { params: data });
    },

    getPostsById(data) {
      return server.get(`/posts/${data.id}`, { params: data });
    }
  };
};
