const input = document.getElementsByTagName("input")[0];
const hasah = document.getElementsByClassName("hasah")[0];
const nemeh = document.getElementsByClassName("nemeh")[0];

nemeh.addEventListener("click", () => {
  input.value = parseInt(input.value) + 1;
});
hasah.addEventListener("click", () => {
  input.value = parseInt(input.value) - 1;
});
