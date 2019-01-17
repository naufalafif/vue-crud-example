import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Customer from './views/Customer.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name:"home", component: Home },
    { path: '/customer', name:"customer", component: Customer },
  ]
});

export default router;