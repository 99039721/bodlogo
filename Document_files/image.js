const zurag = document.getElementsByClassName("zurag")[0];
const button = document.getElementsByTagName("button")[0];
const zuragnuud = ["./buga.jpg", "./nuur.jpg", "./ solongo.jpg"];

const hasah = document.getElementsByClassName("hasah")[0];
const nemeh = document.getElementsByClassName("nemeh")[0];

let i = 0;

nemeh.addEventListener("click", () => {
  i = i + 1;
});
hasah.addEventListener("click", () => {
  i = i - 1;
});
