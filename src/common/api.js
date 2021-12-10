import axios from "axios";
import store from "@/store";
import { goToHome } from "@/common/router";

// Block
const getBlockInfo = async (height) => {
  return axios
    .get(`/block/${height}`)
    .then((response) => {
      store.dispatch("clearSearchErrorMessage");
      return response.data;
    })
    .catch(() => {
      store.dispatch(
        "setSearchErrorMessage",
        "Please enter valid address, transaction or Block ID."
      );
      goToHome();
    });
};

const getLatestBlockList = async () => {
  const response = await axios.get("/blocks");
  return response.data;
};

// Transaction
const getLatestTransactions = async (limit = 0) => {
  const response = await axios.post("/transactions", { limit });
  return response.data;
};

const getTransactionInfo = async (block, transactionHash) => {
  return axios
    .post(`/transaction`, {
      height: block,
      hash: transactionHash,
    })
    .then((response) => {
      store.dispatch("clearSearchErrorMessage");
      return response.data;
    })
    .catch(() => {
      store.dispatch(
        "setSearchErrorMessage",
        "Please enter valid address, transaction or Block ID."
      );
      goToHome();
    });
};

// Wallet
const getCirculatingSupply = async () => {
  const response = await axios.get("/supply");
  return response.data;
};

const getWalletAtPage = async (page, limit) => {
  const response = await axios.post("/wallets", { page, limit });
  return response.data;
};

const getAddressInfo = async (address) => {
  return axios
    .post(`/wallet/`, { address })
    .then((response) => {
      store.dispatch("clearSearchErrorMessage");
      return response.data;
    })
    .catch(() => {
      store.dispatch(
        "setSearchErrorMessage",
        "Please enter valid address, transaction or Block ID."
      );
      goToHome();
    });
};

const getWalletCount = async () => {
  const response = await axios.get("/wallets/count");
  return response.data;
};

export {
  getBlockInfo,
  getLatestBlockList,
  getLatestTransactions,
  getTransactionInfo,
  getCirculatingSupply,
  getWalletAtPage,
  getAddressInfo,
  getWalletCount,
};
