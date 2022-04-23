const add = function(num1, num2) {
	return Math.floor(num1 + num2);
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArr) {
  let outNum = 0;
	for (let i = 0; i < numArr.length; i++) {
    outNum += numArr[i];
  }
  return outNum;
};

const multiply = function(numArr) {
  let outNum = numArr[0] * numArr[1];
  for (let i= 2; i < numArr.length; i++) {
    outNum = outNum*numArr[i];
  }
  return outNum;
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(facNum) {
	let i = 1;
  let numArr = [];
  let outNum = 1;
  while (i <= facNum) {
    numArr.push(i);
    i++;
  }
  for (let x = 1; x < numArr.length; x++) {
    outNum = outNum*numArr[x];
  }
  return outNum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
