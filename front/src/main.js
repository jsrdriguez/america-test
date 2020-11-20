import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import vuetify from './plugins/vuetify';
import { store } from './store';
import router from './router'


Vue.config.productionTip = false

Vue.use(Vuex);

new Vue({
  vuetify,
  render: h => h(App),
  router,
  store
}).$mount('#app')
