// const board = document.getElementById("board");
// const huvilah = document.getElementById("huvilah");
// const shinegarchig = ["To do", "In progress", "Stuck", "Done"];
// const hooson = [];
// const todo = document.getElementById("todo");

// huvilah.addEventListener("click", function () {
//   for (let i = 2; 1 <= 4; i++) {
//     const huvilah = board.cloneNode(true);
//     const heading = huvilah.querySelector("garchig");
//     if (heading) {
//       heading.textContent = `${i}`;
//     }

//     board.parentNode.insertBefore(clonedDiv, OrginalDiv.nextSibling);
//   }
// });

// const board = document.querySelector(".board");
// const button = document.getElementById("add");

// const taskCreator = (Garchig, Desc, Status, Priority) => {
//   return `<div class="board-header">
//             <div id="garchig">To do</div>
//             <div class="count"></div>
//           </div>
//           <div class="cards">
//             <div class="card"></div>
//           </div>
//           <div class="addcard">
//             <i class="fa-solid fa-plus"></i>

//             <button id="huvilah">Add card</button>`;
// };
// button.addEventListener("click", () => {
//   const task = taskCreator("Geriin daalgavar", "hiigeerei", "To do", "Low");
//   const baigaaYumnuud = board.innerHTML;
//   board;
// });

const addCard = document.getElementById("addCard");
const addCardBtn = document.querySelectorAll(".addCardBtn");

addCardBtn.forEach((button) => {
  button.addEventListener("click", () => {
    addCard.style.display = "flex";
  });
});

window.addEventListener("click", (event) => {
  if (event.target == addCard) {
    addCard.style.display = "none";
  }
});

const check = {
  title: "",
  description: "",
  status: "",
  priority: "",
};
const title = document.getElementById("title");
const description = document.getElementById("description");
const status = document.getElementById("status");
const priority = document.getElementById("priority");

const addTaskBtn = document.querySelectorAll(".addTaskBtn");

addTaskBtn.forEach((button) => {
  button.addEventListener("click", () => {
    addCard.style.display = title.innerText;
  });
});
