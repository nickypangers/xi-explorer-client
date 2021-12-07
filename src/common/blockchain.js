import axios from "axios";

const getBlock = async (height) => {
  const response = await axios.get(`/block/${height}`);
  return response.data;
};

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
export { getBlock, getLatestBlockList, getLatestTransactions, getWalletCount };
