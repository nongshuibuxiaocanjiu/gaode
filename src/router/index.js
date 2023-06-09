import Vue from "vue";
import VueRouter from "vue-router";
import index from "../views/index.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: index,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
