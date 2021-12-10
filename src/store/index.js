import { createStore } from "vuex";
import {
  getLatestBlockList,
  getLatestTransactions,
  getWalletCount,
  getCirculatingSupply,
} from "@/common/api";

const store = createStore({
  state() {
    return {
      latestBlock: {},
      walletCount: 0,
      blockList: [],
      latestTransactions: [],
      circulatingSupply: 0,
      searchHasError: false,
      searchErrorMessage: "",
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
    setCirculatingSupply(state, supply) {
      state.circulatingSupply = supply;
    },
    setSearchHasError(state, hasError) {
      state.searchHasError = hasError;
    },
    setSearchErrorMessage(state, message) {
      state.searchErrorMessage = message;
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
      getLatestTransactions(10).then((data) => {
        // console.debug("transactions", data.transactions);
        commit("setLatestTransactions", data.transactions);
      });
      getCirculatingSupply().then((data) => {
        // console.debug("supply", data.supply);
        commit("setCirculatingSupply", data.supply);
      });
    },
    setSearchErrorMessage({ commit }, message) {
      commit("setSearchErrorMessage", message);
      commit("setSearchHasError", true);
    },
    clearSearchErrorMessage({ commit }) {
      commit("setSearchErrorMessage", "");
      commit("setSearchHasError", false);
    },
  },
});

export default store;
