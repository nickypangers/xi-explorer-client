import axios from "axios";

// Block
const getBlockInfo = async (height) => {
  const response = await axios.get(`/block/${height}`);
  return response.data;
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
  const response = await axios.post(`/transaction`, {
    height: block,
    hash: transactionHash,
  });
  return response.data;
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
  const response = await axios.get(`/wallet/${address}`);
  return response.data;
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
