import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import AllShops from '../views/AllShops.vue'
import AllManagers from '../views/AllManagers.vue'
import SingleManager from '../views/SingleManager'
import SingleShop from '../views/SingleShop'
import MyShop from '../views/MyShop.vue'
import AddShop from '../views/AddShop.vue'
import AddArticle from '../views/AddArticle.vue'

import store from './../store/index'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'shops',
    component: AllShops,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      guest: true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      guest: true
    }
  },
  {
    path: '/managers',
    name: 'managers',
    component: AllManagers,
  },
  {
    path: '/managers/:id',
    name: 'single-manager',
    component: SingleManager,
  },
  {
    path: '/article/create',
    name: 'add-article',
    component: AddArticle,
  },
  {
    path: '/my-shop',
    name: 'my-shop',
    component: MyShop,
  },
  {
    path: '/shop/create',
    name: 'add-shop',
    component: AddShop,
  },
  {
    path: '/single-shop',
    name: 'single-shop',
    component: SingleShop,
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isUserLoggedIn = store.getters.isUserAuthenticated
  if (!to.meta.guest && !isUserLoggedIn) {
    next({
      name: 'login',
      path: '/login'
    })
  }
  return next()
})

export default router
