import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
      meta: {eopPage: 'home'}
    },
    {
      path: '/selecttable',
      name: 'selecttable'
      component: () => import('./views/SelectTable.vue'),
      meta: {eopPage: 'selectTable'}
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
    },
    {
      path: '/admin/user',
      name: 'home',
      component: () => import('./views/Admin.vue')
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  }
})

router.beforeEach((to, from, next) => {
  console.log(`${store.getters.sysCode}が${to.meta.eopPage}に遷移`)
  next();
});

async function afterEach(to, from, next) {
  await router.app.$nextTick()

  let eopElements = document.getElementsByClassName("eop");

  for (let element of eopElements) {
    element.addEventListener("click", e => {
      console.log(e.target.getAttributes);
    });
  }
}

router.afterEach(afterEach);
export default router
