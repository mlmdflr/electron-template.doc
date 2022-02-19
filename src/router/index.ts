import { createRouter, createWebHashHistory } from 'vue-router';
import {defaultKey} from "@/cfg/menuCfg";

const Router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Main',
      redirect: '/' + defaultKey
    },
    {
      path: '/:key',
      name: 'Mains',
      component: () => import('@/views/index.vue')
    },
  ]
});

export default Router;