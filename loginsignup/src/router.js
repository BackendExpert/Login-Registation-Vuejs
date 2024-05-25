import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
