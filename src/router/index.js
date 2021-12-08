import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import NotFound from "@/views/NotFound.vue";
import Blocks from "@/views/Blocks.vue";
import BlockOverview from "@/views/BlockOverview.vue";
import Wallets from "@/views/Wallets.vue";
import WalletOverview from "@/views/WalletOverview.vue";
import Transactions from "@/views/Transactions.vue";
import TransactionOverview from "@/views/TransactionOverview.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/blocks",
    name: "Blocks",
    component: Blocks,
  },
  {
    path: "/transactions",
    name: "Transactions",
    component: Transactions,
  },
  {
    path: "/wallets",
    name: "Wallets",
    component: Wallets,
  },
  {
    path: "/blocks",
    name: "Blocks",
    component: Blocks,
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
    name: "WalletOverview",
    component: WalletOverview,
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
