(() => {

  const calcTotal = (prices: number[]): string => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    })
    return total.toString();
  }

  const printTotal = (prices: number[]): void => {
    const resp = calcTotal(prices);
    console.log(`The total is ${resp}`);
  }

  printTotal([1,2,3,4,5])

})()
