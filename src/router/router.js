import { createRouter, createWebHistory } from "vue-router";
import IndexHome from "../pages/home/IndexHome.vue";
import IndexTransactions from "../pages/transactions/IndexTransactions.vue";
import IndexReports from "../pages/reports/IndexReports.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: IndexHome,
  },
  {
    path: "/transactions",
    name: "transactions",
    component: IndexTransactions,
  },
  {
    path: "/reports",
    name: "reports",
    component: IndexReports,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
