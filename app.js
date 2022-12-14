//Write a JavaScript program to compute the union of two arrays.
function fill(arrA, arrB) {
  return [...arrA, ...arrB];
}

let arrOne = [1, 0, 3, undefined, null, 4, 5];
let arrTwo = [11, 22, 33, 44, 55];

fill(arrOne, arrTwo);

//Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.

function clean(arr) {
  for (i = 0; i < arr.length; i++) {
    for (let item of arr) {
      if (
        item === null ||
        item === 0 ||
        item === false ||
        item === undefined ||
        item === NaN ||
        item === ""
      ) {
        let index = arr.indexOf(item);
        arr.splice(index, 1);
      }
    }
  }
  return arr;
}
clean(arrOne);
//Write a JavaScript function to create a specified number of elements with pre-filled numeric value array.
function repeated(element, num) {
  let array = [];
  for (var i = 0; i <= num; i++) {
    array.push(element);
  }

  return array;
}
repeated(2, 5);

//Write a JavaScript function to move an array element from one position to another.

function shuffle(arr, startInd, movedInd) {
  let deletedItem = arr[movedInd];
  arr.splice(movedInd, 1, arr[startInd]);
  arr.splice(startInd, 1, deletedItem);
  return arr;
}
let panda = ["salam", "necesen", "ne var", "ne yox", "neyniyirsen"];

shuffle(panda, 1, 4);

//Write a JavaScript function to generate an array of specified length, filled with integer numbers, increase by one from starting position.
function generate(start, count) {
  let numArr = [];
  for (let i = start; i < start + count; i++) {
    numArr.push(i);
  }
  return numArr;
}

const priArr = [1, 2, 3, 5, 7, 11];
const nonPri = [1, 2, 3, 4, 5, 6];

//return true if all primitive false if not
function primitive(arr) {
  let nonPrimitive = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 2 && arr[i] % 2 === 0) {
      nonPrimitive.push(arr[i]);
    } else if (arr[i] > 3 && arr[i] % 3 === 0) {
      nonPrimitive.push(arr[i]);
    }
  }
  if (nonPrimitive.length !== 0) {
    return false;
  } else if (nonPrimitive.length === 0) {
    return true;
  }
}
let nese = [1, 9, 8, 2, 3, 4];
let nese2 = [4, 3, 100, 200, 200];
//Write a JavaScript program to find all unique values in an given array of numbers.
function findUnique(arr) {
  let newArr = arr.filter((item, i, ar) => ar.indexOf(item) === i);
  return newArr;
}
//Write a JavaScript function to find the unique elements from two arrays.
function sorted(arr1, arr2) {
  let combine = [...arr1, ...arr2];
  let newArr = combine.filter((item, i, ar) => ar.indexOf(item) === i);

  return newArr;
}
//Write a JavaScript function to find the difference of two arrays
function findDiff(arr1, arr2) {
  let difference = arr1.filter((x) => arr2.includes(x));
  return difference;
}

// console.log(findDiff(nese, nese2));
// Write a JavaScript program to shuffle an array
function shuffleArr(arr) {
  let newArr = [];
  for (let nums of arr) {
    const randNum = Math.floor(Math.random() * arr.length);
    newArr.splice(randNum, 0, nums);
  }
  console.log(newArr);
}
shuffleArr(nese);
