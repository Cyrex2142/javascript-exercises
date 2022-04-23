const ftoc = function(farDeg) {
  let celsiusTemp = 0;
  celsiusTemp = Math.round(((farDeg - 32) * 5/9) * 10) / 10;
  return celsiusTemp;
};

const ctof = function(celDeg) {
  let farenheitTemp = 0;
  farenheitTemp = Math.round(((celDeg * 1.8) + 32) * 10) / 10;
  return farenheitTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
