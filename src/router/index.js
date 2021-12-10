import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import NotFound from "@/views/NotFound.vue";
import Blocks from "@/views/Blocks.vue";
import BlockOverview from "@/views/BlockOverview.vue";
import Wallets from "@/views/Wallets.vue";
import WalletOverview from "@/views/WalletOverview.vue";
import Transactions from "@/views/Transactions.vue";
import TransactionOverview from "@/views/TransactionOverview.vue";
import store from "@/store";

const clearSearchError = (to, from, next) => {
  store.commit("setQuery", "");
  store.dispatch("clearSearchErrorMessage");
  next();
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    // beforeEnter: clearSearchError,
  },
  {
    path: "/blocks",
    name: "Blocks",
    component: Blocks,
    beforeEnter: clearSearchError,
  },
  {
    path: "/transactions",
    name: "Transactions",
    component: Transactions,
    beforeEnter: clearSearchError,
  },
  {
    path: "/wallets",
    name: "Wallets",
    component: Wallets,
    beforeEnter: clearSearchError,
  },
  {
    path: "/blocks",
    name: "Blocks",
    component: Blocks,
    beforeEnter: clearSearchError,
  },
  {
    path: "/block/:height",
    name: "BlockOverview",
    component: BlockOverview,
    beforeEnter: clearSearchError,
  },
  {
    path: "/block/:height/transaction/:hash",
    name: "TransactionOverview",
    component: TransactionOverview,
    beforeEnter: clearSearchError,
  },
  {
    path: "/address/:address",
    name: "WalletOverview",
    component: WalletOverview,
    beforeEnter: clearSearchError,
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
