import Vue from 'vue'
import App from './App.vue'
import router from  './routers'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import customers from './models/customer'

Vue.use(Buefy)

Vue.prototype.$dataset = customers;
// Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
