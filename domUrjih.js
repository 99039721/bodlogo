const too1 = document.getElementById("too1");
const too2 = document.getElementById("too2");
const tentsuu = document.getElementsByClassName("tentsuu")[0];
const hariu = document.getElementsByClassName("hariu")[0];

tentsuu.addEventListener("click", () => {
  hariu.innerHTML = too1.value * too2.value;
});
