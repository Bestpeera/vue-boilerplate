import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"), // Lazy loaded
    },
    {
      path: "/temple_info/:temple_id",
      name: "TempleInfo",
      component: () => import("../views/TempleInfoView.vue"), // Lazy loaded
      props: true,
    },
    {
      path: "/filter",
      name: "Filter",
      component: () => import("../views/FilterView.vue"), // Lazy loaded
    },
  ],
});

export default router;
