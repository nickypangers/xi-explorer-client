import { createStore } from "vuex";
import {
  getLatestBlockList,
  getLatestTransactions,
  getWalletCount,
} from "@/common/blockchain";

const store = createStore({
  state() {
    return {
      latestBlock: {},
      walletCount: 0,
      blockList: [],
      latestTransactions: [],
    };
  },
  getters: {
    latestBlockHeight: (state) => {
      return state.latestBlock.height;
    },
  },
  mutations: {
    setLatestBlock(state, block) {
      state.latestBlock = block;
    },
    setWalletCount(state, count) {
      state.walletCount = count;
    },
    setBlockList(state, list) {
      state.blockList = list;
    },
    setLatestTransactions(state, transactions) {
      state.latestTransactions = transactions;
    },
  },
  actions: {
    updateChainInfo({ commit }) {
      getLatestBlockList().then((data) => {
        // console.debug("list", data);
        commit("setBlockList", data.blocks);
        commit("setLatestBlock", data.blocks[0]);
      });
      getWalletCount().then((data) => {
        // console.debug("count", data.count);

        commit("setWalletCount", data.count);
      });
      getLatestTransactions().then((data) => {
        // console.debug("transactions", data.transactions);
        commit("setLatestTransactions", data.transactions);
      });
    },
  },
});

export default store;
