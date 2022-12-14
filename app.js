function fill(arrA, arrB) {
  return [...arrA, ...arrB];
}

let arrOne = [1, 0, 3, undefined, null, 4, 5];
let arrTwo = [11, 22, 33, 44, 55];

fill(arrOne, arrTwo);

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

function repeated(element, num) {
  let array = [];
  for (var i = 0; i <= num; i++) {
    array.push(element);
  }

  return array;
}
repeated(2, 5);

function shuffle(arr, startInd, movedInd) {
  let deletedItem = arr[movedInd];
  arr.splice(movedInd, 1, arr[startInd]);
  arr.splice(startInd, 1, deletedItem);
  return arr;
}
let panda = ["salam", "necesen", "ne var", "ne yox", "neyniyirsen"];

shuffle(panda, 1, 4);

function generate(start, count) {
  let numArr = [];
  for (let i = start; i < start + count; i++) {
    numArr.push(i);
  }
  return numArr;
}
