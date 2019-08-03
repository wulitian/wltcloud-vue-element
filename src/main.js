import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store.js'
import '../theme/index.css'
import '../static/css/wulitian-reset.scss'
import { Button, Select } from 'element-ui'
Vue.use(Button)
Vue.use(Select)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
