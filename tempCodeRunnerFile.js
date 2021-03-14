function discountPrices(prices, discount) {
  var discounted = [];

  for (var i = 0; i < prices.length; i++) {
    var discountedPrice = prices[i] * (1 - discount);
    var finalPrice = Math.round(discountedPrice * 100) / 100;
    discounted.push(finalPrice);
  }

  console.log(i);
  console.log(discountedPrice);
  console.log(finalPrice);

  return discounted;
}

console.log(discountPrices([100, 200, 300], 0.5)); // [ 50, 100, 150 ]
