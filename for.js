//Bodlogo-1: Pinecone Academy ugiig 28 udaa hevleh.
// for (let i = 1; i <= 28; i++) {
//   console.log("Pinecone Academy");
// }

// Bodlogo-2: N! Buyu n toonii bactorialiig ol. (8)
// const N = 8;
// let bactorial = 1;

// for (let i = 1; i <= 8; i++) {
//   bactorial = bactorial * i;
// }
// console.log(N, "bactorial", "=", bactorial);

//Bodlogo-3: Ugugdsun toonii hurdiig hevle. (3)
// const N = 9;
// let hurd = 1;

// for (let i = 1; i <= 10; i++) {
//   hurd = N * i;
//   console.log(N, "*", i, "=", hurd);
// }

//Bodlogo-4: A toonii n zergiig oloh. (a=5, n=9)
// const a = 5;
// const n = 3;
// let zereg = 1;

// for (let i = 1; i <= n; i++) {
//   zereg = zereg * a;
// }
// console.log(a, "-iin", n, "zereg", "=", zereg);

//Bodlogo-5: Ugugdsun n too hurtel natural toonii niilber. (n=22)

// const n = 22;
// let niilber = 0;

// for (let i = 1; i <= n; i++) {
//   niilber = niilber + i;
// }
// console.log(n, "hurtel natural toonii niilber", "=", niilber);

//Bodlogo-6: Ugugdsun n hurtel sondgoi toonuudiin niilber. (n=30)
// const n = 30;
// let niilber = 0;

// for (let i = 0; i <= n; i++) {
//   if (i % 2 !== 0) {
//     niilber = niilber + i;
//   }
// }
// console.log("N hurtel sondgoi toonii niilber", "=", niilber);

//Bodlogo-7: Ugugdsun n hurtel tegsh toonuudiin niilber. (n=100)
// const n = 10;
// let niilber = 0;

// for (let i = 0; i <= n; i++) {
//   if (i % 2 == 0) {
//     niilber = niilber + i;
//   }
// }
// console.log("N hurtel tegsh toonii niilber", "=", niilber);

//Bodlogo-1: Ugugdsun n too hurtel heden sondgoi too baigaag ol. (n=148)

// const n = 148;
// let j = 0;

// for (let i = 0; i <= n; i++) {
//   if (i % 2 !== 0) {
//     j++;
//   }
// }
// console.log(n, "too hurtel sondgoi too", j);

//Bodlogo-2: Ugugdsun n too hurtel heden tegsh too baigaag ol. (n=298)

// const n = 298;
// let j = 0;

// for (let i = 1; i <= n; i++) {
//   if (i % 2 == 0) {
//     j++;
//   }
// }
// console.log(n, "too hurtel tegsh too", j);

//Bodlogo-3: Ugugdsun n too hurtelh tegsh toonuudiin urjveriig ol. (n=10)

// const n = 10;
// let urjver = 1;

// for (let i = 1; i <= n; i++) {
//   if (i % 2 == 0) {
//     urjver = urjver * i;
//   }
// }
// console.log(n, "too hurtelh tegsh toonii urjver", "=", urjver);

//Bodlogo-4: Ugugdsun n too hurtelh sondgoi toonuudiin urjveriig ol. (n=10)

// const n = 7;
// let urjver = 1;

// for (let i = 1; i <= n; i++) {
//   if (i % 2 !== 0) {
//     urjver = urjver * i;
//   }
// }
// console.log(n, "too hurtelh sondgoi toonii urjver", "=", urjver);

//Bodlogo-5: Ugugdsun sar yamar uliral ve.

const sar = 7;
let uliral;

// switch (sar) {
//   case 1:
//     uliral = "uvul";
//     break;
//   case 2:
//     uliral = "uvul";
//     break;
//   case 3:
//     uliral = "havar";
//     break;
//   case 4:
//     uliral = "havar";
//     break;
//   case 5:
//     uliral = "havar";
//     break;
//   case 6:
//     uliral = "zun";
//     break;
//   case 7:
//     uliral = "zun";
//     break;
//   case 8:
//     uliral = "zun";
//     break;
//   case 9:
//     uliral = "namar";
//     break;
//   case 10:
//     uliral = "namar";
//     break;
//   case 11:
//     uliral = "namar";
//     break;
//   case 12:
//     uliral = "uvul";
//     break;
//   default:
//     alert("Aldaa");
//     throw new Error("Garnaas ugsun utga saruudaas ih bna!");
// }
// console.log("Yamar uliral ve?", "-", uliral);

//Bodlogo-6: Ugugdsun mashinii dugaar heddeh udur yawah erhgui ve?

// const dugaar = 10;

// let yawahgui_udur = dugaar % 10;

// switch (yawahgui_udur) {
//   case 0:
//     yawahgui_udur = "5 dahi";
//     break;
//   case 1:
//     yawahgui_udur = "1 dahi";
//     break;
//   case 2:
//     yawahgui_udur = "2 dahi";
//     break;
//   case 3:
//     yawahgui_udur = "3 dahi";
//     break;
//   case 4:
//     yawahgui_udur = "4 dahi";
//     break;
//   case 5:
//     yawahgui_udur = "5 dahi";
//     break;
//   case 6:
//     yawahgui_udur = "1 dahi";
//     break;
//   case 7:
//     yawahgui_udur = "2 dahi";
//     break;
//   case 8:
//     yawahgui_udur = "3 dahi";
//     break;
//   case 9:
//     yawahgui_udur = "4 dahi";
//     break;
//   default:
//     alert("Aldaa");
//     throw new Error("Garnaas ugsun utga ulsiin dugaar bish bna!");
// }
// console.log("Hed deh udur yawahgui ve?", "-", yawahgui_udur);

//Bodlogo-7: Undur jil oloh.

// const jil = 2020;

// if (jil % 4 == 0) {
//   if (jil % 100 == 0) {
//     console.log("undur jil");
//   } else if (jil % 400 == 0) {
//     console.log("undur jil");
//   } else {
//     console.log("undur jil bish");
//   }
// } else {
//   console.log("undur jil bish");
// }
