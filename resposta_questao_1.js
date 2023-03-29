const arr = [6, 3, 65, 2, 68, 32, 2];

const handleIntGrowingNumbers = (valueInt) => {
  const order = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  if (valueInt !== order) {
    console.log(`${valueInt}: não está ordenado`);

    valueInt.sort(function (a, b) {
      return a - b;
    });

    console.log(`${valueInt}: está ordenado`);
  }
};

const handleIntDescendingNumbers = (valueInt) => {
  valueInt.sort(function (a, b) {
    return b - a;
  });

  console.log(`${valueInt}: está ordenado`);
};

handleIntGrowingNumbers(arr);
handleIntDescendingNumbers(arr);
