function getFormattedTimestamp() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const seconds = String(currentDate.getSeconds()).padStart(2, "0");

  return `${year}_${month}_${day}_${hours}${minutes}${seconds}`;
}

function getArgValue(argName) {
  const args = process.argv.slice(2);
  const arg = args.find((arg) => arg.startsWith(`${argName}=`));
  return arg ? arg.split("=")[1] : null;
}

function createArrayFromNumber(num) {
  if (!isNaN(num) && parseInt(num) > 0) {
    const number = parseInt(num);
    return Array.from({ length: number }, (_, index) => (index + 1).toString());
  } else {
    return [num.toString()];
  }
}

module.exports = {
  getFormattedTimestamp,
  getArgValue,
  createArrayFromNumber,
};
