const howManyPicturesModes = (personsQty) => {
  // defino um resultado igual a 1
  let result = 1;

  // faço um laço de repetição e se 1 for menor que a quantidade de pessoas ele adiciona mais 1
  for (let i = 1; i <= personsQty; i++) {
    // aqui fazemos result * i = que retorna um resultado
    result *= i;
  }

  console.log(result);
};

howManyPicturesModes(6);
