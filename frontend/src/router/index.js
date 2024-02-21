import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import OurMenueView from '../views/OurMenueView.vue'
import ReservationView from '../views/ReservationView.vue'
import ContactView from '../views/ContactView.vue'

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
    path: '/contact',
    name: 'contact',
    component:ContactView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
