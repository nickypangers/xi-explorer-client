import router from "@/router";

const goToBlock = (height) => {
  router.push({
    name: "BlockOverview",
    params: {
      height,
    },
  });
};

const goToTransaction = (height, hash) => {
  router.push({
    name: "TransactionOverview",
    params: {
      height,
      hash,
    },
  });
};

const goToAddress = (address) => {
  router.push({
    name: "AddressOverview",
    params: {
      address,
    },
  });
};

export { goToBlock, goToTransaction, goToAddress };
