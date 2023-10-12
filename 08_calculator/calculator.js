const add = function(x,y) {
  return x+y;
};

const subtract = function(x,y) {
	return x-y;
};

const sum = function(arr) {
  let total = 0;
	for(let i=0;i<arr.length;i++){
    total += arr[i];
  }
  return total;
  // return arr.reduce((total,current) => total + current,0)
};

const multiply = function(arr) {
  let product = 1;
  for(let value=0;value<arr.length;value++){
    console.log(value);
    product *= arr[value];
  }
  return product;
  // return arr.reduce((product,item)=> { product * item},1);
};

const power = function(x,y) {
	return Math.pow(x,y);
};

const factorial = function(n) {
  if(n===0){
    return 1;
  }
  let fact = 1;
	for(let i=1;i<=n;i++){
    fact = fact * i;
  }
  return fact;
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
