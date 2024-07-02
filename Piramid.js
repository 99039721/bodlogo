// Bodlogo-8:

// 1-1, 2-3, 3-5, 4-7,

//mur: 1-1, 2-3, 3-5, 4-7,

//      mur * 2 - 1; //

//          | |*| |
//          |*|*|*|

//        | | |*| | |
//        | |*|*|*| |
//        |*|*|*|*|*|

//      | | | |*| | | |
//      | | |*|*|*| | |
//      | |*|*|*|*|*| |
//      |*|*|*|*|*|*|*|

// const N = 5;
// const M = N * 2 - 1;
// const mid = Math.floor((N * 2 - 1) / 2);

// for (let i = 0; i < N; i++) {
//   let line = "";
//   for (let j = 0; j < M; j++) {
//     if (j >= mid - i && j <= mid + i) {
//       line += "*";
//     } else {
//       line += " ";
//     }
//   }
//   console.log(line);
// }

// Bodlogo-8-B:

// const n = 5;
// const mid = Math.floor((n * 2 - 1) / 2);

// for (let row = 0; row < n; row++) {
//   let line = "";
//   for (let col = 0; col < n * 2 - 1; col++) {
//     if (col >= mid - row && col <= mid + row) {
//       line += "*";
//     } else {
//       line += " ";
//     }
//   }
//   console.log(line);
// }

// Bodlogo-7:

// const N = 10;

// for (let i = 1; i <= N; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// Bodlogo-6:

// const arr1 = [1, 2, 234, 123, 556, 123, 9, 19, 12, 976];
// const arr2 = [99, 123, 544, 998];
// const ogtoltsol = [];

// for (let i = 0; i <= arr1.length - 1; i++) {
//   for (j = 0; j <= arr1.length - 1; j++) {
//     if (arr1[i] == arr2[j]) {
//       console.log(arr1[i]);
//     }
//   }
// }

//Bodlogo-5:

// const a = ["h", "e", "l", "l", "o"];

// for (let i = 0; i <= a.length - 1; i++) {
//   for (let j = i + 1; j <= a.length - 1; j++)
//     if (a[i] === a[j]) {
//       console.log("davhardsan useg", "-", a[j]);
//     }
// }

//Bodlogo-4:

// const a = "hello";
// let b = "";

// for (let i = a.length - 1; i >= 0; i--) {
//   b = b + a[i];
// }
// console.log(b);

//Bodlogo-3:

// const arr1 = [1, 2, 234, 123, 556, 123, 9, 19, 12, 976];
// let max = arr1[0];
// for (let i = 0; i <= arr1.length - 1; i++) {
//   if (max <= arr1[i]) {
//     max = arr1[i];
//   }
// }
// console.log("max", "=", max);

//Bodlogo-2:
// const arr1 = [1, 2, 234, 123, 556, 123, 9, 19, 12, 976];
// let sum = 0;
// let dundaj = 0;
// for (let i = 0; i <= arr1.length - 1; i++) {
//   sum = sum + arr1[i];
//   console.log(sum);
//   console.log(arr1.length - 1);
// }
// dundaj = sum / (arr1.length - 1);
// console.log("dundaj", "=", dundaj);

//Bodlogo-1:
// const arr1 = [1, 2, 234, 123, 556, 123, 9, 19, 12, 976];
// let sum = 0;

// for (let i = 0; i <= arr1.length - 1; i++) {
//   sum = sum + arr1[i];
// }
// console.log("sum", "=", sum);
