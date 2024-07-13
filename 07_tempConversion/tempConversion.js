const FIVE_OVER_NINE = 5 / 9;
const NINE_OVER_FIVE = 9 / 5;

const convertToCelsius = function(temp) {
  if (temp === 32) {
    return 0;
  }
  let fahrenheit = temp - 32;
  fahrenheit *= FIVE_OVER_NINE;
  fahrenheit = Math.round(fahrenheit * 10) / 10
  return fahrenheit;
};

const convertToFahrenheit = function(temp) {
  if (temp === 0) {
    return 32;
  }
  let celsius = temp * NINE_OVER_FIVE;
  celsius += 32;
  celsius = Math.round(celsius * 10) / 10;
  return celsius;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
