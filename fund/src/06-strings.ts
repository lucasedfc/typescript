(() => {

let productTitle = 'My Product';
// productTitle = null;
// productTitle = () => {};
// productTitle = 124;

productTitle = 'New Product';
console.log('productTitle', productTitle);

const productDescription = "product description";

console.log('productDescription', productDescription);

const summary = `
title: ${productTitle},
description: ${productDescription}
`;

console.log('summary', summary);

})()
