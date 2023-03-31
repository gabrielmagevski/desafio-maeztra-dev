const charsVerifyCompilator = (caracters) => {
  const caracteres = [];

  const mappingChars = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  for (const caracter of caracters) {
    if (mappingChars[caracter]) {
      caracteres.push(caracter);
    } else if (caracter == "}" || caracter == ")" || caracter === "]") {
      if (mappingChars[caracteres.pop()] !== caracter) {
        return "Sequência incorreta.";
      }
    }
  }

  return caracteres.length === 0 ? "Sequência correta" : "Sequência incorreta.";
};

console.log(charsVerifyCompilator("[}}{}[](){]"));
