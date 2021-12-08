import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import NotFound from "@/views/NotFound.vue";
import AddressOverview from "@/views/AddressOverview.vue";
import BlockOverview from "@/views/BlockOverview.vue";
import TransactionOverview from "@/views/TransactionOverview.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/block/:height",
    name: "BlockOverview",
    component: BlockOverview,
  },
  {
    path: "/block/:height/transaction/:hash",
    name: "TransactionOverview",
    component: TransactionOverview,
  },
  {
    path: "/address/:address",
    name: "AddressOverview",
    component: AddressOverview,
  },
  {
    path: "/404",
    name: "404",
    component: NotFound,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404",
  },
];

const router = createRouter({
  linkActiveClass: "nav-active",
  history: createWebHistory(),
  routes,
});

export default router;
