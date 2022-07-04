import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Layout from "../views/Layout.vue";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import LoginType from "../components/login/LoginType.vue";
import Register from "../components/login/Register.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    children: [
      {
        path: "/",
        component: Home,
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    children: [
      {
        path: "/login",
        name: "logintype",
        component: LoginType,
      },
      {
        path: "/register",
        name: "register",
        component: Register,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
