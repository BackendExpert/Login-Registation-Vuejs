import App from './App.vue'
import './assets/tailwind.css'
import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from './components/HomePage.vue'

Vue.use(VueRouter);

const routes = [
    { path: '/', component: HomePage },
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

// createApp(App).mount('#app')
