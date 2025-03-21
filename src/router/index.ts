import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"), // Lazy loaded
      meta: {
        title: "Mapmu | Home",
      },
    },
    {
      path: "/temple_info/:temple_id",
      name: "TempleInfo",
      component: () => import("../views/TempleInfoView.vue"), // Lazy loaded
      props: true,
      meta: {
        title: "Mapmu | Temple",
      },
    },
    {
      path: "/filter",
      name: "Filter",
      component: () => import("../views/FilterView.vue"), // Lazy loaded
      meta: {
        title: "Mapmu | Filter",
      },
    },
    {
      path: "/review/temple/:temple_id",
      name: "Review",
      component: () => import("../views/ReviewView.vue"), // Lazy loaded
      meta: {
        title: "Mapmu | Review",
      },
    },
    {
      path: "/review/temple/:temple_id/add",
      name: "Add Review",
      component: () => import("../views/AddReviewView.vue"), // Lazy loaded
      meta: {
        title: "Mapmu | Add Review",
      },
    },
  ],
});

export default router;
