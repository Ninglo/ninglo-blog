import Vue from 'vue';
import Router from 'vue-router';
import user from '../components/user.vue';
import mdEditor from '../components/mdEditor.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
    },
    {
      path: '/user/:id',
      name: 'user',
      component: user,
    },
    {
      path: '/mdEditor',
      name: 'mdEditor',
      component: mdEditor,
    },
  ],
});
