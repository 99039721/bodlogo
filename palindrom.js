//Bodlogo-11.

// let input = 1234321;
// const str = input.toString();
// let isPal = true;

// for (let i = 0; i < str.length / 2; i++) {
//   if (str[i] !== str[str.length - 1 - i]) {
//     isPal = false;
//     break;
//   }
// }
// console.log(isPal);

//Bodlogo-12.

// const N = 99;
// let t = 0;

// for (let i = 1; i <= N; i++) {
//   if (t <= 2) {
//     if (N % i === 0) {
//       t++;
//       console.log(i);
//     }
//   }
// }
// if (t <= 2) {
//   console.log("anhnii too", "-", true);
// } else {
//   console.log("anhnii too", "-", false);
// }

//Bodlogo-13A.

// const N = 10;
// let t = 0;

// for (let j = 1; j <= N; j++) {
//   for (let i = 1; i <= j; i++) {
//     if (t <= 2) {
//       if (N % i === 0) {
//         t++;
//         // console.log(i);
//       }
//     }
//   }
//   if (t <= 2) {
//     console.log("anhnii too", "=", j);
//   }
// }

//Bodlogo-13B.

// const N = 13;

// let t = 0;

// for (let i = 1; i <= N; i++) {
//   for (let j = 0; j <= i; j++) {
//     if (i % j === 0) {
//       t++;
//       if (t > 2) {
//         break;
//       }
//     }
//   }
// }

//Bodlogo-14.

// const N = 10;
// const fibonach = [0, 1];

// for (let i = 0; i <= N - 2; i++) {
//   const an = fibonach[i] + fibonach[i + 1];
//   fibonach.push(an);
// }
// console.log(fibonach);

//Bodlogo-15.

// const array = [1, 2, 2, 3, 4, 3];
// const duplicate = [];

// for (let i = 0; i <= array.length - 1; i++) {
//   //asuuh??????
//   if (!duplicate.includes(array[i])) {
//     duplicate.push(array[i]);
//   }
// }
// console.log("duplicate", "=", duplicate);

//Bodlogo-16.

// const d = 0;
// const daraalal = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i <= daraalal.length - 1; i++) {
//   const d = daraalal[i + 1] - daraalal[i];
//   if (d !== 1) {
//     console.log("alga bolson too", "=", daraalal[i] + 1);
//     break;
//   }
// }

//Bodlogo-18.

// let a = 24;

// let XIEX = 1;

// for (let i = 2; i <= 9; i++) {
//   if (a % i === 0 && a == 1) {
//     a = a / i;
//     console.log(a);
//   }
// }

//Bodlogo-18B.

let a = 24;

while (let i = 2; i <= 9; i++) {
  if (a % i === 0 && a == 1) {
    a = a / i;
    console.log(a);
  }
}
