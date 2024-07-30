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
  taskStatus: "",
  priority: "",
};

const title = document.getElementById("title");
const description = document.getElementById("description");
const taskStatus = document.getElementById("taskStatus");
const priority = document.getElementById("priority");
const addTaskBtn = document.querySelectorAll(".addTaskBtn");
const addTaskModalBtn = document.getElementById("addTaskModalBtn");

addTaskBtn.forEach((button) => {
  button.addEventListener("click", () => {
    addCard.style.display = title.innerText;
  });
});

addTaskModalBtn.addEventListener("click", () => {
  const cards = document.querySelectorAll(".cards");

  (check.title = title.value),
    (check.description = description.value),
    (check.taskStatus = taskStatus.value),
    (check.priority = priority.value);

  const task = taskCreator(
    check.title,
    check.description,
    check.taskStatus,
    check.priority
  );

  switch (check.taskStatus) {
    case "todo":
      cards[0].innerHTML = cards[0].innerHTML + task;
      break;
    case "inProgress":
      cards[1].innerHTML = cards[0].innerHTML + task;
      break;
    case "stuck":
      cards[2].innerHTML = cards[0].innerHTML + task;
      break;
    case "done":
      cards[3].innerHTML = cards[0].innerHTML + task;
      break;
  }

  addCard.style.display = "none";
});

const addTask = document.getElementsByClassName("addTask")[0];

const taskCreator = (title, description, taskStatus, priority) => {
  return `
    <div class="card">
              <div>
                <i class="fa-regular fa-circle-check"></i>
              </div>
              <div class="cardcontent">
                <div>${title}</div>
                <div>${description}</div>
                <div class="cardpriority">${priority}</div>
              </div>
              <div class="zasah">
                <div><i class="fa-solid fa-xmark"></i></div>
                <div><i class="fa-solid fa-pen-to-square"></i></div>
              </div>
            </div>
  `;
};

// console.log(addTask.innerText.value);
