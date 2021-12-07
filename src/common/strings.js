const shortenAddress = (address) => {
  return (
    address.substring(0, 6) + "..." + address.substring(address.length - 4)
  );
};

const shortenHash = (hash) => {
  return hash.substring(0, 14) + "...";
};

export { shortenAddress, shortenHash };
