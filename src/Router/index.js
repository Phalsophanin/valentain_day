import { createRouter, createWebHistory } from 'vue-router'
import index from '../components/index.vue';




// Define your routes here
const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
  },

]
// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
