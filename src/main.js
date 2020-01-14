import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/store';
import router from './routes/routes';

Vue.config.productionTip = false;
Vue.use(Element);
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app');
