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

const timestampToDate = (timestamp) => {
  if (timestamp === undefined || timestamp === null) {
    return "";
  }
  let date = new Date(timestamp);

  let dateString = date
    .toLocaleString("en-GB", {
      hour12: true,
      timeZone: "UTC",
    })
    .toUpperCase();
  return `${dateString} +UTC`;
};

export { displayBlockTimeSinceNowString, timestampToDate };
