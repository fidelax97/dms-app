import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/login/',
      name: 'Login',
      component: () => import("../views/login"),
    },
    {
      path: '/register/',
      name: 'Register',
      component: () => import("../views/register"),
    }
  ]
})
