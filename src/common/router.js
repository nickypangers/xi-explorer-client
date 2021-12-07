import router from "@/router";

const goToBlock = (height) => {
  return router.push({
    name: "Block",
    params: {
      height,
    },
  });
};

const goToTransaction = (height, hash) => {
  return router.push({
    name: "Transaction",
    params: {
      height,
      hash,
    },
  });
};

const goToAddress = (address) => {
  return router.push({
    name: "Address",
    params: {
      address,
    },
  });
};

export { goToBlock, goToTransaction, goToAddress };
