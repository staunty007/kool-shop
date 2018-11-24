import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Home from '@/views/Home'
import SingleProduct from '@/views/SingleProduct'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
  {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/product/:id',
      name: 'SingleProduct',
      component: SingleProduct
    },
  ]
})
