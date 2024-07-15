const add = function(numOne, numTwo) {
  return numOne + numTwo;
};

const subtract = function(numOne, numTwo) {
	return numOne - numTwo;
};

const sum = function(numArray) {
  let arrSum = 0;
  if (numArray.length === 0) {
    return arrSum;
  }

	arrSum = numArray.reduce((total, currentNum) => {
    return total + currentNum;
  });

  return arrSum;
};

const multiply = function(numArray) {
  let arrMul = numArray.reduce((total, currentNum) => {
    return total * currentNum;
  });

  return arrMul;
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(number) {
  let factorialSum = 1

	if (number === 0) {
    return factorialSum;
  }

  while (number > 0) {
    factorialSum *= number;
    number--;
  }
  
  return factorialSum;
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
