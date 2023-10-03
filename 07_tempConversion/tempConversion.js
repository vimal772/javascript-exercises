const convertToCelsius = function(temp) {
  let far= (temp - 32) * 5/9;
  if(Number.isInteger(far)){
    return far;
  }else{
    return parseFloat(far.toFixed(1));
  }
};

const convertToFahrenheit = function(temp) {
  let cels = (temp *1.8) + 32;
  if(Number.isInteger(cels)){
    return cels;
  }
  else{
    return parseFloat(cels.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
