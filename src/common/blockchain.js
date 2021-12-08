import axios from "axios";

const getBlockInfo = async (height) => {
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

export {
  getBlockInfo,
  getLatestBlockList,
  getLatestTransactions,
  getWalletCount,
  totalBlockValue,
  getAddressInfo,
  getTransactionInfo,
};
