import Vue from 'vue'
import router from './configs/router.js'

Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h('router-view'),
  router
})
