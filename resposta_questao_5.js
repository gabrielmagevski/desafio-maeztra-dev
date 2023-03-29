const howManyPicturesModes = (personsQty) => {
  let result = 1;

  for (let i = 1; i <= personsQty; i++) {
    result *= i;
  }

  console.log(result);
};

howManyPicturesModes(6);
