// q1) Reverse the array

let arr1 = [5, 8, 9, 6, 5, 4, 7, 5, 8];
function reverseArray(arr: number[]) {
  let arrCopy = [...arr];
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    [arrCopy[i], arrCopy[arrCopy.length - 1 - i]] = [
      arrCopy[arrCopy.length - 1 - i],
      arrCopy[i],
    ];
  }
  console.log("reversed array", arrCopy);
  return arrCopy;
}

reverseArray(arr1);

// q2) Find the maximum and minimum element in an array

let arr2 = [5, 8, 9, 6, 5, 4, 7, 5, 8];

function minMax(arr: number[]) {
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < arr2.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }
  console.log("min", min, "max", max);
}

minMax(arr2);

// q3) Find the "Kth" max and min element of an array

let arr3 = [5, 8, 9, 6, 5, 4, 7, 5, 8];

function quickSelect(arr: number[]) {}

function findKth(position: number, type: "min" | "max") {}
