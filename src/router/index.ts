import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../Views/Home.vue";
import Admin from "../Views/Admi.vue";
import Cart from "../Views/Cart.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: Home },
  { path: "/admin", component: Admin },
  { path: "/cart", component: Cart },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
