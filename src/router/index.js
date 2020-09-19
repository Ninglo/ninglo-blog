import Vue from 'vue';
import Router from 'vue-router';
import home from '../components/home.vue';
import user from '../components/user.vue';
import mdEditor from '../components/mdEditor.vue';
import blog from '../components/blog.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: home,
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
    {
      path: '/blog/:index',
      name: 'blog',
      component: blog,
    },
  ],
});
