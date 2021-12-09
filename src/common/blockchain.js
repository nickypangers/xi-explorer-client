const totalBlockValue = (block) => {
  if (block.transactions === null || block.transactions === undefined) {
    return 0;
  }

  return block.transactions
    .map((transaction) => transaction.amount)
    .reduce((a, b) => a + b, 0);
};

export { totalBlockValue };
