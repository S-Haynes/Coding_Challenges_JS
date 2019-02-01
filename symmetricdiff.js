// Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

// Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}). The resulting array must contain only unique values (no duplicates).

//solution 1

function sym(args) {
  const arr = args.slice.call(arguments);
  let currentArr = [];

  arr.map(subArr => {
    for (let i = 0; i < subArr.length; i++) {
      if (
        currentArr.indexOf(subArr[i]) === -1 &&
        i === subArr.indexOf(subArr[i])
      ) {
        currentArr.push(subArr[i]);
      } else if (
        currentArr.indexOf(subArr[i]) !== -1 &&
        i === subArr.indexOf(subArr[i])
      ) {
        currentArr.splice(currentArr.indexOf(subArr[i]), 1);
      }
    }
  });
  return currentArr;
}

// solution 2

function sym(args) {
  const arr = args.slice.call(arguments);
  let currentArr = [];

  for (let i = 0; i < arr[0].length; i++) {
    if (currentArr.indexOf(arr[0][i]) === -1) {
      currentArr.push(arr[0][i]);
    }
  }

  arr.splice(0, 1);

  while (arr.length > 0) {
    let compareArr = arr[0];

    for (let i = 0; i < compareArr.length; i++) {
      if (
        currentArr.indexOf(compareArr[i]) === -1 &&
        i === compareArr.indexOf(compareArr[i])
      ) {
        console.log(compareArr[i]);
        currentArr.push(compareArr[i]);
      } else if (
        currentArr.indexOf(compareArr[i]) !== -1 &&
        i === compareArr.indexOf(compareArr[i])
      ) {
        currentArr.splice(currentArr.indexOf(compareArr[i]), 1);
      }
    }

    arr.splice(0, 1);
  }

  return currentArr;
}
