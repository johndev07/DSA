"use strict";
// q1) Reverse the array
let arr1 = [5, 8, 9, 6, 5, 4, 7, 5, 8];
function reverseArray(arr) {
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
function minMax(arr) {
    let min = Infinity;
    let max = -Infinity;
    for (let i = 0; i < arr2.length; i++) {
        if (arr[i] < min)
            min = arr[i];
        if (arr[i] > max)
            max = arr[i];
    }
    console.log("min", min, "max", max);
}
minMax(arr2);
// q3) Find the "Kth" max and min element of an array
// let arr3 = [5, 8, 9, 6, 5, 4, 7, 5, 8];
// function partition(arr, left, right): number {
//   const pivot = arr[right];
//   let i = left;
//   for (let j = left; j < right; j++) {
//     if (arr[j] <= pivot) {
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//       i++;
//     }
//   }
//   return i;
// }
// function quickSelect(
//   arr: number[],
//   position: number,
//   left = 0,
//   right = arr.length - 1
// ) {
//   if (left == right) return arr[left];
//   const pivotIndex = partition(arr, left, right);
//   if (position === pivotIndex) {
//     return arr[pivotIndex];
//   } else if (pivotIndex > position) {
//     return quickSelect(arr, position, left, pivotIndex - 1);
//   } else {
//     return quickSelect(arr, position, pivotIndex + 1, right);
//   }
// }
// function findKth(arr, position: number, type: "min" | "max") {
//   if (type === "min") {
//     return quickSelect(arr, position);
//   } else {
//     return quickSelect(arr, arr.length - position);
//   }
// }
// let second_min = findKth(arr3, 2, "min");
// console.log(second_min);
