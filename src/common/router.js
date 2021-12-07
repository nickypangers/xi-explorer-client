import router from "@/router";

const goToBlock = (height) => {
  router.push({
    name: "Block",
    params: {
      height,
    },
  });
};

const goToTransaction = (height, hash) => {
  router.push({
    name: "Transaction",
    params: {
      height,
      hash,
    },
  });
};

const goToAddress = (address) => {
  router.push({
    name: "Address",
    params: {
      address,
    },
  });
};

export { goToBlock, goToTransaction, goToAddress };
