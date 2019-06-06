import Vue from 'vue'
import Router from 'vue-router'

// Page content
import Items from '@/components/Items'
import Dashboard from '@/components/Dashboard'
import Login from '@/components/Login'
import Home from '@/components/Home'

// Fallback page
import PageNotFound from '@/components/PageNotFound'

Vue.use(Router)

export default new Router({
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
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/items/:category/:id',
      name: 'Items',
      component: Items,
      props: true,
    },
    {
      path: '**',
      name: 'PageNotFound',
      component: PageNotFound
    }
  ]
})