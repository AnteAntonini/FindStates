import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: () => import('@/components/HomePage')
    },
    {
      path: '/region/:region',
      name: 'StatesAll',
      component: () => import('@/components/StatesAll'),
      props: true
    },
    {
      path: '/state/:state',
      name: 'StatesSingle',
      component: () => import('@/components/StatesSingle'),
      props: true
    },
    {
      path: '/signup',
      name: 'FormSignUp',
      component: () => import('@/components/FormSignUp')
    },
    {
      path: '/login',
      name: 'FormLogin',
      component: () => import('@/components/FormLogin')
    },
    {
      path: '/favStates',
      name: 'StatesFavorite',
      component: () => import('@/components/StatesFavorite')
    },
    {
      path: '/**',
      component: () => import('@/components/NotFound')
    }
  ]
})
