import { RouteRecordRaw } from 'vue-router';
import { menuOption } from "@/cfg";
const Route: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Main',
    redirect: '/'+menuOption[0].children[0].key
  },
  {
    path: '/:key',
    name: 'Mains',
    component: () => import('@/views/pages/home/index.vue')
  }
];

export default Route;
