import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import OurMenueView from "../views/OurMenueView.vue";
import AdminView from "../views/AdminView.vue";
import ContactView from "../views/ContactView.vue";
import ProductView from "../views/ProductView.vue";
import MenuView from "../views/MenuView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/menue",
    name: "menue",
    component: OurMenueView,
  },
  {
    path: "/product-menue/:catergory",
    name: "product-menue",
    component: MenuView,
  },
  {
    path: "/admin",
    name: "admin",
    component: AdminView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/product/:productId",
    name: "product",
    component: ProductView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
