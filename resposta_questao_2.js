const arr = [4, 5, 44, 98, 4, 5, 6, 7];

function findInArrayNumbersDuplicates(arr) {
  const duplicates = [];

  for (let a = 0; a < arr.length; a++) {
    for (let b = a + 1; b < arr.length; b++) {
      if (arr[a] === arr[b] && duplicates.indexOf(arr[a]) === -1) {
        duplicates.push(arr[a]);
      }
    }
  }

  return duplicates;
}

const exec = findInArrayNumbersDuplicates(arr);
console.log(exec);
