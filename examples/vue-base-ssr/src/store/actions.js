import api from '@/api'

export default {
  getPosts: ({ commit }, data) => {
    return api.posts.getPosts(data)
      .then(({ data }) => {
        commit('SET_POSTS', data)
      })
  },

  getHotPosts: ({ commit }, data) => {
    return api.posts.getPosts(data)
      .then(({ data }) => {
        commit('SET_HOT_POSTS', data)
      })
  },

  getPostsById: ({ commit }, data) => {
    return api.posts.getPostsById(data)
      .then(({ data }) => {
        commit('SET_POST', data)
      })
  },

  getComments: ({ commit }, data) => {
    return api.comments.getComments(data)
      .then(({ data }) => {
        commit('SET_COMMENTS', data)
      })
  },
}
