const clone = obj => {
  const clonedObj = {};
  for (let key in obj) {
    if (!clonedObj[key]) {
      clonedObj[key] = JSON.stringify(obj[key]);
      clonedObj[key] = JSON.parse(clonedObj[key]);
    }
  }
  return clonedObj;
};

module.exports = clone;
