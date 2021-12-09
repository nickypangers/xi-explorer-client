import axios from "axios";

const getBlockInfo = async (height) => {
  const response = await axios.get(`/block/${height}`);
  return response.data;
};

const getLatestBlockList = async () => {
  const response = await axios.get("/blocks");
  return response.data;
};

const getLatestTransactions = async (limit = 0) => {
  const response = await axios.get(`/transactions/limit/${limit}`);
  return response.data;
};

const getWalletCount = async () => {
  const response = await axios.get("/wallets/count");
  return response.data;
};

const getAddressInfo = async (address) => {
  const response = await axios.get(`/wallet/${address}`);
  return response.data;
};

const getTransactionInfo = async (block, transactionHash) => {
  const response = await axios.get(
    `/block/${block}/transaction/${transactionHash}`
  );
  return response.data;
};

const totalBlockValue = (block) => {
  if (block.transactions === null || block.transactions === undefined) {
    return 0;
  }

  return block.transactions
    .map((transaction) => transaction.amount)
    .reduce((a, b) => a + b, 0);
};

const getWalletAtPage = async (page, limit) => {
  const response = await axios.post("/wallets", { page, limit });
  return response.data;
};

const getCirculatingSupply = async () => {
  const response = await axios.get("/supply");
  return response.data;
};

export {
  getBlockInfo,
  getLatestBlockList,
  getLatestTransactions,
  getWalletCount,
  totalBlockValue,
  getAddressInfo,
  getTransactionInfo,
  getWalletAtPage,
  getCirculatingSupply,
};
