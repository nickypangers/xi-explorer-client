import axios from "axios";

const getLatestBlockList = async () => {
  const response = await axios.get("/blocks");
  return response.data;
};

const getLatestTransactions = async () => {
  const response = await axios.get("/transactions/limit/10");
  return response.data;
};

const getWalletCount = async () => {
  const response = await axios.get("/wallets/count");
  return response.data;
};
export {
  getLatestBlockList,
  getLatestTransactions,
  getWalletCount,
};
