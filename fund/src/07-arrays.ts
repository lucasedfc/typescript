(() => {
  let prices = [1, 2, 3, 4, 54, 212, 314, 'hello', true];

  // prices.push('321');
  // prices.push(true);
  // prices.push({});

  prices.push(321312);

  let products = ['hello', true];
  products.push(false);

  let mixed: (number | string | boolean)[] = ['hello', true];
  mixed.push(123);
  mixed.push(false);

  let numbers = [1, 2, 3, 4, 54, 212, 314];

  numbers.map((item) => item * 2);
})();
