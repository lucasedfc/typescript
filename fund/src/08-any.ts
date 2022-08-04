(() => {
  let myDynamicValue: any;

  myDynamicValue = 100;
  myDynamicValue = null;
  myDynamicValue = [];
  myDynamicValue = {};

  myDynamicValue = 'Hello';
  const response = (myDynamicValue as string).toLowerCase(); // cast to string

  console.log(response);

  myDynamicValue = 1221;
  const resp = (<number>myDynamicValue).toFixed(); // another way to cast
  console.log(resp);

})();
