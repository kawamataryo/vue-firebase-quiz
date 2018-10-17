import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import './plugins/firebase'
import App from './App.vue'
import router from './router'
import store from './store'
import Bars from 'vuebars'

Vue.use(Bars)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
