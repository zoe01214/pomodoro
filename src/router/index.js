import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/list',
    name: 'List',
    component: () => import(/* webpackChunkName: "list" */ '../views/List.vue')
  },
  {
    path: '/analysis',
    name: 'Analysis',
    component: () => import(/* webpackChunkName: "analysis" */ '../views/Analysis.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
