(() => {
  let userId: number | string;

  userId = 13231;
  userId = 'dsadsadsa';

  function greeting(myText: number | string) {
    if (typeof myText === 'string') {
      console.log(`string: ${myText.toLowerCase()}`);
    } else {
      console.log(`number: ${myText.toFixed(1)}`);
    }
  }

  greeting(453.321);
  greeting('Michael Scott');
})();
