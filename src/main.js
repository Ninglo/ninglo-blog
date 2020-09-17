import Vue from 'vue';
import App from './App.vue';
import marked from 'marked';

Vue.config.productionTip = true;

new Vue({
  marked,
  render: (h) => h(App),
}).$mount('#app');
