// Criei um array com uma sequência fixa
const arr = [6, 3, 65, 2, 68, 32, 2];

// Criei uma função para verificar os numeros inteiros e ordena-los
const handleIntGrowingNumbers = (valueInt) => {
  // Criei um array com números de exemplo de ordem que eles devem seguir.
  const order = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  if (valueInt !== order) {
    //Comparei se o array esta com os numeros em ordem de acordo com o array exemplar.
    console.log(`${valueInt}: não está ordenado`);

    //Chamei a função sort para ordenar os números de acordo.
    valueInt.sort(function (a, b) {
      return a - b;
    });

    // Output final
    console.log(`${valueInt}: está ordenado`);
  }
};

//Criei uma função para ver os numeros inteiros e ordena-los ao contrário.
const handleIntDescendingNumbers = (valueInt) => {
  // Aqui ele ordenar de forma ao contrário o tornando o array do maior para o menor.
  valueInt.sort(function (a, b) {
    return b - a;
  });

  console.log(`${valueInt}: está ordenado`);
};

// Chamada das funções e parametros
handleIntGrowingNumbers(arr);
handleIntDescendingNumbers(arr);
