import { createRouter, createWebHashHistory } from 'vue-router';
import pageRoute from '@/router/modular/page';

const Router = createRouter({
  history: createWebHashHistory(),
  routes: [...pageRoute]
});


export default Router;