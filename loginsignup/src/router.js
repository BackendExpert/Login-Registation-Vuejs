import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import DashBoard from './components/DashBoard.vue';


const routes = [
  { path: '/', component: HomePage },
  { path: '/DashBoard', component: DashBoard }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;