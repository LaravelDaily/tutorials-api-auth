import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

Vue.config.productionTip = false

axios.interceptors.request.use(function (config) {
  config.headers.common = {
    'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }

  return config
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')