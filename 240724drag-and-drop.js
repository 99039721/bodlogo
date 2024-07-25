// const numbers = document.querySelectorAll(".number");
// const kvadrat = document.querySelectorAll(".kvadrat");

// numbers.forEach((number, index) => {
//   number.setAttribute("id", `number-${index}`);
// });

// numbers.forEach((number) => {
//   number.addEventListener("dragstart", (event) => {
//     event.target.style.backgroundColor = "yellow";
//     event.dataTransfer.setData("text/plain", event.target.id);
//   });
// });

// numbers.forEach((number) => {
//   number.addEventListener("drag", (event) => {
//     event.target.style.backgroundColor = "yellow";
//   });
// });

// numbers.forEach((number) => {
//   number.addEventListener("dragend", (event) => {
//     event.target.style.backgroundColor = "#c0c0c0";
//   });
// });

// kvadrat.forEach((inner) => {
//   inner.addEventListener("dragover", (event) => {
//     event.preventDefault();
//   });
// });

// kvadrat.forEach((inner) => {
//   inner.addEventListener("drop", (event) => {
//     const draggedElementId = event.dataTransfer.getData("text/plain");
//     const draggedElement = document.getElementById(draggedElementId);
//     console.log(event.target.hasChildNodes());
//     console.log(event.target.childNodes[0]);
//     if (event.target.hasChildNodes()) {
//       return;
//     }
//     event.target.appendChild(draggedElement);
//   });
// });

// //click
// //style.width
