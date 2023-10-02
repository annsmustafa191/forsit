import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import InventoryManagementView from "../views/InventoryManagementView.vue";
import AddProductView from "../views/AddProductView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/inventory-management",
    name: "inventory-management",
    component: InventoryManagementView,
  },
  {
    path: "/add-product",
    name: "add-product",
    component: AddProductView,
  },
  {
    path: "/revenue-analysis",
    name: "revenue-analysis",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/RevenueAnalysisView.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
