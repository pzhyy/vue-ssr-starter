import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
const Topic = () => import('~/views/Topic.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/topics/:type', component: Topic },
      { path: '/', redirect: '/topics/all' }
    ]
  })
}
