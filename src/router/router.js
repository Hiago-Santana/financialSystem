import { createRouter, createWebHistory } from "vue-router";
import IndexHome from "../pages/home/IndexHome.vue";
import IndexTransactions from "../pages/transactions/IndexTransactions.vue";
import IndexReports from "../pages/reports/IndexReports.vue";
import NewTransactionModal from "../pages/newTransaction/NewTransactionModal.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: IndexHome,
  },
  {
    path: "/transacoes",
    name: "transactions",
    component: IndexTransactions,
  },
  {
    path: "/relatorios",
    name: "reports",
    component: IndexReports,
  },
  {
    path: "/nova-transacao",
    name: "newTransactionModal",
    component: NewTransactionModal,
  },

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
