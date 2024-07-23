const zuragnuud = ["./buga.jpg", "./nuur.jpg", "./solongo.jpg"];

const zurag = document.getElementById("zurag");
const hasah = document.getElementsByClassName("hasah")[0];
const nemeh = document.getElementsByClassName("nemeh")[0];

let i = 0;

zurag.src = zuragnuud[0];

nemeh.addEventListener("click", () => {
  if (i < zuragnuud.length - 1) {
    i = i + 1;

    zurag.src = zuragnuud[i];
  } else {
    i = 0;
    zurag.src = zuragnuud[i];
  }
});

hasah.addEventListener("click", () => {
  if (i > 0 && i <= zuragnuud.length - 1) {
    i = i - 1;
    zurag.src = zuragnuud[i];
  } else {
    i = zuragnuud.length - 1;
    zurag.src = zuragnuud[i];
  }
});
