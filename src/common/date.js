const millisecondsToSecond = (milliseconds) => milliseconds / 1000;

const secondsSinceNow = (milliseconds) => {
  const now = Date.now();
  return Math.floor(millisecondsToSecond(now - milliseconds));
};

const displayBlockTimeSinceNowString = (milliseconds) => {
  const seconds = secondsSinceNow(milliseconds);
  if (seconds < 60) {
    return `${seconds}s`;
  }
  return `${Math.ceil(seconds / 60)}m`;
};

export { displayBlockTimeSinceNowString };
