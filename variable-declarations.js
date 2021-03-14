/* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                        Variable Scope
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                
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

/* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                    var vs let vs const
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~    
var: function scoped
let: block scoped, any { }

both declaration get hoisted to the top

use a variable before declaration:
var => undefined
let => ReferenceError

const: same as let, cannot reassign value


*/

function discountPrices(prices, discount) {
  let discounted = [];

  for (let i = 0; i < prices.length; i++) {
    let discountedPrice = prices[i] * (1 - discount);
    let finalPrice = Math.round(discountedPrice * 100) / 100;
    discounted.push(finalPrice);
  }

  //   variables inside for loop only accessible for loop's { block scope}
  console.log(i); // ReferenceError: i is not defined
  console.log(discountedPrice);
  console.log(finalPrice);

  return discounted;
}

console.log(discountPrices([100, 200, 300], 0.5));

// --------------------------------------------------------
const person = {
  name: "First Last",
};

person.name = "Name reassigned";
console.log(
  "🚀 ~ file: variable-declarations.js ~ line 95 ~ person.name",
  person.name,
); // Name reassigned

person = {}; // TypeError: Assignment to constant variable.
