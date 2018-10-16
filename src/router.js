import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/result',
      name: 'result',
      component: () => import('./views/Result.vue')
    },
    {
      path: '/question/:question',
      name: 'Question',
      component: () => import('./views/Question.vue')
    },
    {
      path: '/question/:question/answer/:answer',
      name: 'Answer',
      component: () => import('./views/Answer.vue')
    }

  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  }
})
