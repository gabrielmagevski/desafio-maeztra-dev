//Array com datas de matrix, fixas
const years = [
  [1960, 2005],
  [1945, 2008],
  [1938, 1999],
];

// funcao que recebe a matrix como parametros
const yearsWorked = (years) => {
  // Array vazio para armazenar os dados
  const yearsWorkedArr = [];

  //Laço de repetição para pecorrer o array
  for (let i = 0; i < years.length; i++) {
    //count para guardar a conta por string
    const count = `${years[i][1]} - ${years[i][0]}`;
    //result dos anos subtraidos nos gerando resultados
    const result = years[i][1] - years[i][0];

    // puxando para o array o count e o resultado
    yearsWorkedArr.push({ count, yearsOld: result });

    // ordenando o maior resultado
    yearsWorkedArr.sort((a, b) => a.yearsOld - b.yearsOld);
  }

  // pegando a ultima posição do array que vai estar o maior resultado :)
  const { count, yearsOld } = yearsWorkedArr[yearsWorkedArr.length - 1];

  console.log(`O maior ano que obtevemos pessoas trabalhando foi de ${count} = ${yearsOld} anos`);
};

//execução
yearsWorked(years);
