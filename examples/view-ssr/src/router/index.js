import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
const Home = () => import('@/views/Home.vue')
const Post = () => import('@/views/Post.vue')
const About = () => import('@/views/About.vue')

export function createRouter() {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/', redirect: { name: 'Home' } },
      { path: '/posts', name: 'Home', component: Home },
      { path: '/posts/:id', name: 'Post', component: Post },
      { path: '/about', name: 'About', component: About }
    ]
  })
}
