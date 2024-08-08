// Bodlogo - 1;

// const helloWorld = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("hello world");
//   }, 1000);
// });

// helloWorld.then((response) => console.log(response));

//Bodlogo-2.

// let counter = 0;

// const tooluur = setInterval(() => {
//   const promise = new Promise((resolve) => {
//     counter += 1;
//     resolve(counter);
//     if (counter >= 10) {
//       clearInterval(tooluur);
//     }
//   });
//   promise.then((response) => console.log(response));
// }, 1000);

//Bodlogo-3.

// let step = 0;

// const alham = setInterval(() => {
//   const promise = new Promise((resolve) => {
//     step += 1;
//     resolve(step);
//     if (step >= 3) {
//       clearInterval(alham);
//     }
//   });
//   promise.then((response) => console.log("Step", response));
// }, 2000);

//Bodlogo-4.

// const error = new Promise((resolve, reject) => {
//   reject("Something went wrong");
// });

//   console.log((error.catch) => error.message);

// const nums = [1, 2, 3, 4, 5];

// // 1 sek tutam nums-iin utguudiig neg negeer nem.

// Map()
// setTimeout(nums[]+1);

//Bodlogo-5.

// const nums = [1, 2, 3, 4, 5];

// const wait = (ms) => {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// };

// // Утгуудыг нэмэх функц
// const incrementAllAndPrint = (nemeh)=> {
//   for (true) {
//     // Массивын бүх утгуудыг 1-ээр нэмэх
//     for (let i = 0; i < nums.length; i++) {
//       nums[i]++;
//     }
//     // Шинэ массивыг хэвлэх
//     console.log([...nums]); // Spread оператор ашиглан шинэ массивийг хэвлэх
//     // 1 секунд хүлээх
//     wait wait(1000);
//   }
// }

// // Функцийг дуудах
// incrementAllAndPrint();
