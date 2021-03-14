/* 
~~~~~~~~~~~~~~~~~~~~~~~~ Variable Scope ~~~~~~~~~~~~~~~~~~~~~~~~
*/

function getDate() {
  var date = new Date();

  return date;
}

console.log(getDate()); // returns date
console.log(date); // ReferenceError: date is not defined

// --------------------------------------------------------
function getDate() {
  var date = new Date();

  function formatDate() {
    return date.toDateString().slice(4);
  }

  return formatDate();
}

console.log(getDate()); // Mar 13 2021: nested formatDate() has access to date
console.log(date); // ReferenceError: date is not defined

// --------------------------------------------------------
function discountPrices(prices, discount) {
  var discounted = [];

  for (var i = 0; i < prices.length; i++) {
    var discountedPrice = prices[i] * (1 - discount);
    var finalPrice = Math.round(discountedPrice * 100) / 100;
    discounted.push(finalPrice);
  }

  //   Still has access to variables inside for loop
  console.log(i); // 3
  console.log(discountedPrice); // 150
  console.log(finalPrice); // 150

  return discounted;
}

console.log(discountPrices([100, 200, 300], 0.5)); // [ 50, 100, 150 ]

// all variables are first hoisted to the top of the function:
// var i
// var discountedPrice
// var finalPrice
// if not declared with var, variable name will be a property of global scope
