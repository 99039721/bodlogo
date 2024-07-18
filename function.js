// BODLOGO-1 өгөгдсөн гурвалжны приметрыг ол.

// const primeter = (a, b, c) => {
//   let p = a + b + c;

//   return p;
// };

// const a = 5;
// const b = 3;
// const c = 4;

// const result = primeter(a, b, c);

// console.log("өгөгдсөн гурвалжны приметер =", result);

// BODLOGO-2 бүхэл тооны нийлбэрийг ол

// const buhel = (a, b, c, d, e) => {
//   let N = a + b + c + d + e;
//   const buhelToo = parseInt(N);
//   return buhelToo;
// };

// const a = 1;
// const b = 3;
// const c = 5;
// const d = 7;
// const e = 8.7;

// const result = buhel(a, b, c, d, e);
// console.log("buhel toonii niilber", "=", result);

// BODLOGO-3 өгөгдсөн тэгш өнцөгтийн талбай ба периметрийг ол. Урт=10; өргөн=5;

// const talbaiPrimeter = (a, b) => {
//   let talbai = a * b;
//   let primeter = (a + b) * 2;

//   return [talbai, primeter];
// };

// const a = 5;
// const b = 10;

// const result = talbaiPrimeter(a, b);

// console.log("талбай =", result[0]);
// console.log("периметр =", result[1]);

// BODLOGO-4 өгөгдсөн 98 секундыг минут секунд болго.

// const minutSec = (a) => {
//   let sec = a % 60;
//   let min = (a - sec) / 60;

//   return [min, sec];
// };

// let a = 98;

// const result = minutSec(a);

// console.log("минут =", result[0]);
// console.log("секунд =", result[1]);

// BODLOGO-5 өгөгдсөн 1297 секундыг цаг, минут, секунд болго.

// const tsagMinutSec = (a) => {
//   let sec = a % 60;
//   let min = 0;
//   let hour = 0;

//   min = parseInt((a - sec) / (60 * 60));
//   hour = parseInt(a / (60 * 60));

//   return [hour, min, sec];
// };

// let a = 3666;
// const result = tsagMinutSec(a);

// console.log("цаг =", result[0]);
// console.log("минут =", result[1]);
// console.log("секунд =", result[2]);

// BODLOGO-6 өгөгдсөн 875 минут, 88 секундыг секунд рүү шилжүүл.

// const secund = (min, sec) => {
//   a = sec + min * 60;
//   return a;
// };

// let min = 1;
// let sec = 28;

// const result = secund(min, sec);
// console.log("секунд =", result);

// BODLOGO-7 өгөгдсөн 83 цаг, 84 минут, 85 секундыг секунд рүү шилжүүл.

// const secund = (hour, min, sec) => {
//   a = sec + min * 60 + hour * 60 * 60;
//   return a;
// };

// let hour = 1;
// let min = 1;
// let sec = 1;

// const result = secund(hour, min, sec);
// console.log("секунд =", result);

// BODLOGO-8: өгөгдсөн 38 цагийг хоногт шилжүүл.

// const honog = (a) => {
//   let tsag = a % 24;
//   let honog = (a - tsag) / 24;
//   return [honog, tsag];
// };

// let a = 38;

// result = honog(a);

// console.log("хоног =", result[0]);
// console.log("цаг =", result[1]);

// BODLOGO-9: өгөгдсөн 4 хоног, 40 цагийг хоногт шилжүүл.

// const honog = (ugsun_honog, ugsun_tsag) => {
//   let tsag = ugsun_tsag % 24;
//   let honog = (ugsun_tsag - tsag) / 24 + ugsun_honog;
//   return [honog, tsag];
// };

// let ugsun_honog = 4;
// let ugsun_tsag = 40;

// result = honog(ugsun_honog, ugsun_tsag);

// console.log("хоног =", result[0]);
// console.log("цаг =", result[1]);

// BODLOGO-10: өгөгдсөн 106 сарыг жил, сар руу шилжүүл.

// const jilSar = (ugsun_sar) => {
//   let sar = ugsun_sar % 12;
//   let jil = (ugsun_sar - sar) / 12;
//   return [jil, sar];
// };

// let ugsun_sar = 121;

// result = jilSar(ugsun_sar);

// console.log("жил =", result[0]);
// console.log("сар =", result[1]);

// BODLOGO-11: Өгөгдсөн 90 жил, 98 сарыг сард шилжүүл.

// let ugsun_jil = 90;
// let ugsun_sar = 98;
// let sar = ugsun_jil * 12 + ugsun_sar;

// BODLOGO-5: Өгөгдсөн 4 тооны багыг ол. (9, 3, 2, 8)

// const a = 9;
// const b = 23;
// const c = 12;
// const d = 38;
// let minimum = a;

// if (minimum > a) {
//   minimum = a;
// }
// if (minimum > b) {
//   minimum = b;
// }
// if (minimum > c) {
//   minimum = c;
// }
// if (minimum > d) {
//   minimum = d;
// }

// console.log("minimum =", minimum);

// BODLOGO-6: Өгөгдсөн 4 тооны 5-аас бага тоонуудын үржвэрийг ол. (2, 9, 4, 3)

// const a = 2;
// const b = 9;
// const c = 4;
// const d = 3;
// let urjver = 1;

// if (a < 5) {
//   urjver = urjver * a;
// }
// if (b < 5) {
//   urjver = urjver * b;
// }
// if (c < 5) {
//   urjver = urjver * c;
// }
// if (d < 5) {
//   urjver = urjver * d;
// }

// console.log("5-аас бага тоонуудын үржвэр", "=", urjver);

// BODLOGO-7: Өгөгдсөн 6 тооны 5-аас их тоонуудын үржвэрийг ол. (11, 9, 4, 3)

// const a = 11;
// const b = 9;
// const c = 4;
// const d = 3;
// let urjver = 1;

// if (a > 5) {
//   urjver = urjver * a;
// }
// if (b > 5) {
//   urjver = urjver * b;
// }
// if (c > 5) {
//   urjver = urjver * c;
// }
// if (d > 5) {
//   urjver = urjver * d;
// }

// console.log("5-аас их тоонуудын үржвэр", "=", urjver);

// const fruits = (a, b, c) => {
//   let ehnii = a[0];
// };

//Bodlogo:forEach.

// const ehniiUseg = (arr) => {
//   arr.forEach((el) => {
//     console.log(el[0]);
//   });

//   return [];
// };

// const arr = ["apple", "banana", "cherry"];

// const arr = ["white", "black", "green"];

// const result = ehniiUseg(arr);

// console.log(result);

//Bodlogo: Sum.

// const arr = [10, 20, 30, 40, 50, 5];

// let sum = 0;
// arr.forEach((el, ind) => {
//   sum = sum + el;
// });
// console.log(sum);

// Bodlogo: Sum_function;

// const niilber = (arr) => {
//   let sum = 0;
//   arr.forEach((el) => {
//     sum = sum + el;
//   });
//   return sum;
// };

// const arr = [22, 4452, 2456, 9887];

// const arr = [20, 40, 50, 90];

// const result = niilber(arr);

// console.log("SUM", "=", result);

//MAP, FILTER, FIND

//Bodlogo-1: Kvadrat.

// const numbers = [1, 2, 3, 4, 5];

// const numbersKvadrat = numbers.map((item, index) => item * item);

// console.log(numbersKvadrat);

//Bodlogo-2: 20% nemeh

// const prices = [100, 200, 300, 400];

// const pricesNemegdel = prices.map((item, index) => item + item * 0.2);

// console.log(pricesNemegdel);

//Bodlogo-3: 10% hungulult

// const prices = [100, 200, 300, 400];

// const pricesHungulult = prices.map((item, index) => item - item * 0.1);

// console.log(pricesHungulult);

//Bodlogo-4: 3-iin too hed deh indeh deer baigaag ol.

// const numbers = [1, 2, 3, 4, 5];

// const numberGurav = numbers.map((item, index) => {
//   if (item === 3) {
//     console.log(index);
//   }
// });

//Bodlogo-5: 3-aas baga toonuudiig ol.

// const numbers = [1, 2, 3, 4, 5];

// const numbersGurav = numbers.map((item, index) => {
//   if (item < 3) {
//     console.log(item);
//   }
// });

//Bodlogo-6: Dund ni baigaa toog olj 10-aar urjuul.

// const numbers = [1, 2, 3, 4, 5];

// const numberDund = numbers.map(
//   (item, index) => (newIndex = Math.floor(numbers.length / 2))
// );
// console.log(numbers[newIndex] * 10);

//Bodlogo-7: Sondgoi toonuudiig ol.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const filteredSondgoi = numbers.filter((item, index) => {
//   if (item % 2 !== 0) {
//     console.log("SondgoiToo", "=", item);
//   }
// });

//Bodlogo-8: J usgeer ehelsen neriig olj butsaa.

// const nameJ = ["John", "Jane", "James", "Alica", "Bod"];

// const filtered = nameJ.filter((item) => item[0] === "J");

// console.log(filtered);

//Bodlogo-9: 345-aas ih bolon baga toonuudiig yalgaj 2 array butsaa.

// const prices = [120, 344, 200, 323, 411, 405, 20, 40, 504, 993];

// const pricesBaga = prices.filter((item, index) => {
//   if (item < 345) {
//     const itemBaga = item;
//     return itemBaga;
//   }
// });

// const pricesIh = prices.filter((item, index) => {
//   if (item > 345) {
//     const itemIh = item;

//     return itemIh;
//   }
// });
// console.log("345-aas Baga", "=", pricesBaga);
// console.log("345-aas Ih", "=", pricesIh);

//Bodlogo-10: 9 usegtei string-iig ol.

// const strings = ["apple", "banana", "cherry", "blueberry", "date"];

// // const filtered = strings.filter((item) => item[0] === "b");

// const filtered = strings.find((item) => item.length === 9);

// console.log(filtered);

//2024.07.16

//Boglogo-1.

// const arr = [
//   ["Alice", 30],
//   ["Bod", 25],
//   ["John", 54],
// ];

// const ner = [];
// const nas = [];

// arr.forEach((person) => {
//   person.forEach((item) => {
//     if (typeof item === "string") {
//       ner.push(item);
//     } else {
//       nas.push(item);
//     }
//   });
// });
// console.log({ ner, nas });

//Boglogo-2.

// const data = [
//   ["Bod", 25],
//   ["John", 54],
//   ["Alice", 30],
// ];

// let ageIndex, foundItem, itemId;

// data.forEach((item, id) => {
//   item.forEach((el, index, arr) => {
//     if (el === 30) {
//       ageIndex = index;
//       foundItem = arr;
//       itemId = id;
//     }
//   });
// });

// const username = foundItem.find((item) => typeof item === "string");

// console.log(ageIndex, username, itemId);

//Boglogo-3.

// const data = ["abcd", "xyz", "1234"];
// data.forEach((item) => {
//   console.log(item.split("").reverse().join(""));
// });

//Boglogo-4.

// 1,2,3,4,
// n*(n+1)/2

// const data = [3, 7, 1, 2, 8, 4, 6];
// let sum = 0;
// const n = data.length + 1;

// data.forEach((item) => {
//   sum = sum + item;
//   dutuuToo = (n * (n + 1)) / 2 - sum;
// });
// console.log(dutuuToo, sum, n);

//Boglogo-5.

// const data = ["apple", "banana", "apricot", "cherry"];

// const fruits = data.filter((item) => item[0] === "a");

// console.log(fruits);

//Obiekt
//Bodlogo-1.

// const items = [
//   { name: "item1", price: 30 },
//   { name: "item2", price: 20 },
//   { name: "item3", price: 50 },
// ];

// const sum = items.reduce((acc, item) => acc + item.price, 0);

// console.log(sum);

//Bodlogo-2.

// const books = [
//   { title: "Book1", author: "Author1" },
//   { title: "Book2", author: "Author2" },
//   { title: "Book3", author: "Author3" },
// ];

// const zohiolch = books.map((a) => a.author);

// console.log(zohiolch);

//Bodlogo-3.

// const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
// ];

// const zohiolch = users.find((a) => a.name === "Bob");

// console.log(zohiolch);

//2024.07.18
//Bodlogo-1.

// data structure:
// string
// Number
// boolean
// Array
// Object
// undefined
// OOP

// //Bodlogo-1.

const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 59 },
  { name: "Charlie", grade: 72 },
];

const dund = students.filter((a) => a.grade >= 60);

console.log(a.name);

//Bodlogo-2.a.

// const peaple1 = [
//   { firstname: "Alice", lastname: "Doe" },
//   { firstname: "Bob", lastname: "Smith" },
//   { firstname: "Charlie", lastname: "Jones" },
// ];
// const fullname1 = peaple1.map((a) => a.firstname + " " + a.lastname);

// console.log(fullname1);

// //Bodlogo-2.b.

// const peaple = [
//   { firstname: "Alice", lastname: "Doe" },
//   { firstname: "Bob", lastname: "Smith" },
//   { firstname: "Charlie", lastname: "Jones" },
// ];
// const fullnames = peaple.map(
//   ({ firstname, lastname }) => `${firstname} ${lastname}`
// );

// console.log(fullnames);
