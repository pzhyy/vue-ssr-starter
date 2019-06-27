import Vue from 'vue'
import Router from 'vue-router'

// route-level code splitting
const Home = () => import('@/views/Home.vue')
const Post = () => import('@/views/Post.vue')
const About = () => import('@/views/About.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  fallback: false,
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', redirect: { name: 'Home' } },
    { path: '/posts', name: 'Home', component: Home },
    { path: '/posts/:id', name: 'Post', component: Post },
    { path: '/about', name: 'About', component: About }
  ]
})
