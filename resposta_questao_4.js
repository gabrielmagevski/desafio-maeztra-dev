const years = [
  [1960, 2005],
  [1945, 2008],
  [1938, 1999],
];
const yearsWorked = (years) => {
  const yearsWorkedArr = [];

  for (let i = 0; i < years.length; i++) {
    const count = `${years[i][1]} - ${years[i][0]}`;
    const result = years[i][1] - years[i][0];

    yearsWorkedArr.push({ count, yearsOld: result });
    yearsWorkedArr.sort((a, b) => a.yearsOld - b.yearsOld);
  }

  const { count, yearsOld } = yearsWorkedArr[yearsWorkedArr.length - 1];

  console.log(`O maior ano que obtevemos pessoas trabalhando foi de ${count} = ${yearsOld} anos`);
};

yearsWorked(years);
