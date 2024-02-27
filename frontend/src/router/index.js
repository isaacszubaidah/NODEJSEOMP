import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import OurMenueView from '../views/OurMenueView.vue'
import ReservationView from '../views/ReservationView.vue'
import AdminView from '../views/AdminView.vue'
import ContactView from '../views/ContactView.vue'
import ProductView from '../views/ProductView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component:AboutView
  },
  {
    path: '/menue',
    name: 'menue',
    component:OurMenueView
  },
  {
    path: '/reservation',
    name: 'reservation',
    component:ReservationView
  },
  {
    path: '/admin',
    name: 'admin',
    component:AdminView
  },
  {
    path: '/contact',
    name: 'contact',
    component:ContactView
  },
  {
    path: '/product',
    name: 'product',
    component:ProductView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
