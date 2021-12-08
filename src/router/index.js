import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import NotFound from "@/views/NotFound.vue";
import Address from "@/views/Address.vue";
import Block from "@/views/Block.vue";
import Transaction from "@/views/Transaction.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/block/:height",
    name: "Block",
    component: Block,
  },
  {
    path: "/block/:height/transaction/:hash",
    name: "Transaction",
    component: Transaction,
  },
  {
    path: "/address/:address",
    name: "Address",
    component: Address,
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
