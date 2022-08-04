(() => {

  // Alias
  type UserID = string | number;

  let userId: UserID;

  // Literal Types

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  let shirtSize: Sizes;
  shirtSize = 'S';
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  // shirtSize = 'DSADS';


  function greeting(userId: UserID, size: Sizes) {
    if (typeof userId === 'string') {
      console.log(`string: ${userId.toLowerCase()}`);
    }
  }

  greeting('dsadsa', 'L');
  greeting(1231, 'S');
  // greeting(true);




})();
