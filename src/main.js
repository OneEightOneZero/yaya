import Vue from 'vue'
import router from './configs/router.js'
import axios from 'axios'

Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h('router-view'),
  router
})
