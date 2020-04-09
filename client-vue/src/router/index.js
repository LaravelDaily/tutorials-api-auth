import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const guest = (to, from, next) => {
  if (!localStorage.getItem('authToken')) {
    return next()
  } else {
    return next('/')
  }
}
const auth = (to, from, next) => {
  // Solve a bug where user isn't yet loaded but the app runs
  if (localStorage.getItem('authToken')) {
    return next()
  } else {
    return next('/login')
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    beforeEnter: guest,
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/users',
    name: 'Users',
    beforeEnter: auth,
    component: () => import(/* webpackChunkName: "users" */ '../views/Users.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
