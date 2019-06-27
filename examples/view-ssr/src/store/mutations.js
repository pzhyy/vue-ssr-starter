export default {
  SET_POSTS: (state, posts) => {
    state.posts = posts;
  },

  SET_HOT_POSTS: (state, posts) => {
    state.hotPosts = posts;
  },

  SET_POST: (state, post) => {
    state.post = post;
  },

  SET_COMMENTS: (state, comments) => {
    state.comments = comments;
  }
};
