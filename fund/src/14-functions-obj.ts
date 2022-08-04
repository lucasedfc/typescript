(() => {


  const login = (data: {email: string, password: number}) => {
    console.log(data.email, data.password);
  }

  // login('test@test.com', '123123');
  login({
    email: 'test@test.com',
    password: 123321,
  });

  type Sizes = 'S' | 'M' | 'L' | 'XL';
  const products: any[] = [];

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) => {
    products.push(data);
  }

  addProduct({
    title: 'Product 1',
    createdAt: new Date(),
    stock: 10,
  })

  addProduct({
    title: 'Product 2',
    createdAt: new Date(),
    stock: 12,
    size: 'L'
  })

  console.log(products);

})()
