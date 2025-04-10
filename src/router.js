import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "./layouts/MainLayout.vue";
import Home from "./views/Home.vue";
import ProjectDetails from "./views/ProjectDetails.vue";
import Test from "./views/Test.vue";

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      { path: "", component: Home },
      { path: "test", component: Test },
      {
        path: "project/:path",
        name: "ProjectDetails",
        component: ProjectDetails,
        props: true,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0 };
  },
});

export default router;
