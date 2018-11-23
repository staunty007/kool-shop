// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueNoty from 'vuejs-noty'

import 'vuejs-noty/dist/vuejs-noty.css'

Vue.use(VueNoty);

//Vue.config.productionTip = false

const authData = localStorage.getItem("auth");

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data:{
  	auth: authData ? JSON.parse(authData) : {}
  },
  components: { App },
  template: '<App/>'
})
