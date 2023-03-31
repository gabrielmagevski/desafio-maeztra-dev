// Fiz um array de exemplo fixo
const arr = [4, 5, 44, 98, 4, 5, 6, 7];

function findInArrayNumbersDuplicates(arr) {
  // Fiz um array vazio para armazenar os numeros
  const duplicates = [];

  // Fiz um laço de repetição para pecorrer o array fixo
  for (let a = 0; a < arr.length; a++) {
    for (let b = a + 1; b < arr.length; b++) {
      // Aqui ele verifica se o numero do array na posição arr[A] e o mesmo do arr[B], se são igual e
      // se o duplicates que é um array vazio a gente procura se na posição arr[A] é igual a -1, se ele for igual a -1 ele faz o push para o duplicates. (Por que -1 é considerado numero ou item ou objeto não presente no array.)
      console.log("a", arr[a]);
      console.log("b", arr[b]);

      if (arr[a] === arr[b] && duplicates.indexOf(arr[a]) === -1) {
        duplicates.push(arr[a]);
      }
    }
  }

  return duplicates;
}

const exec = findInArrayNumbersDuplicates(arr);
console.log(exec);
