import { addProduct, calcStock, products } from './product.service';

addProduct({
  name: 'Product 1',
  createdAt: new Date(),
  stock: 10,
});

addProduct({
  name: 'Product 2',
  createdAt: new Date(),
  stock: 12,
  size: 'L',
});


console.log({productos: products});
const total = calcStock();
console.log({Stockl: total});

