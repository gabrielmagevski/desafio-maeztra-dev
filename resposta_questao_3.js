const charsVerifyCompilator = (caracters) => {
  //Criei um array vazio para armazenar os caracteres
  const caracteres = [];

  // Fiz um mapping dos pares e dos valores deles
  const mappingChars = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  // fiz um laço de repetição para rodar no array por completo
  for (const caracter of caracters) {
    // aqui ele pega o primeiro indice dos caracteres
    if (mappingChars[caracter]) {
      caracteres.push(caracter);
    }

    // aqui ele verifica se os caracteres iniciais e seu par, caso não for retornar sequência incorreta;
    else if (caracter == "}" || caracter == ")" || caracter === "]") {
      if (mappingChars[caracteres.pop()] !== caracter) {
        return "Sequência incorreta.";
      }
    }
  }
  // Caso nao tenha nada no array, retorna correto.
  return caracteres.length === 0 ? "Sequência correta" : "Sequência incorreta.";
};

// execução
console.log(charsVerifyCompilator("{{}[]()}"));
