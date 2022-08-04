(() => {
  let productPrice = 100;
  productPrice = 12;
  console.log('productPrice', productPrice);

  let customerAge: number = 28;
  customerAge = customerAge + 1;
  console.log('customerAge', customerAge);

  let productStock: number;

  console.log('productStock', productStock);
  if (productStock > 10) {
    console.log('is greater than 10');
  }

  let discount = parseInt('190');

  console.log('discount', discount);

  if (discount <= 200) {
    console.log('apply');
  } else {
    console.log('not apply');
  }

  let hex = 0xfff;
  console.log('hex', hex);

  let bin = 0b1010;

  console.log('bin', bin);

})();
