// Array Questions

// Q1. Reverse the array

let nums = [23, 45, 12, 89, 34, 67, 91, 15, 38, 52];

function reverseArray(arrVal) {
  let arr = [...arrVal];
  let length = arr.length;
  for (let i = 0; i < Math.floor(length / 2); i++) {
    [arr[length - 1 - i], arr[i]] = [arr[i], arr[length - 1 - i]];
  }
  return arr;
}

let reversedvalue = reverseArray(nums);
console.log(reversedvalue);

// Q2) Find the maximum and minimum element in an array

let nums2 = [23, 45, 12, 89, 34, 67, 91, 15, 38, 52];

function maxmin(arrVal) {
  let min = arrVal[0];
  let max = arrVal[0];

  for (let x of arrVal) {
    if (x < min) min = x;
    if (x > max) max = x;
  }
  return { min, max };
}

let maxminValue = maxmin(nums2);
console.log(maxminValue);
