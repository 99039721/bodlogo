let i = 50;
let j = 50;
let rednumber = 50;
let bluenumber = 50;

const redNumber = document.getElementById("redNumber");
const blueNumber = document.getElementById("blueNumber");
const red = document.getElementById("red");
const blue = document.getElementById("blue");

red.addEventListener("click", () => {
  if (i < 100) {
    i = i + 5;
    j = j - 5;
    console.log(i, j);

    red.style.width = `${i}%`;
    blue.style.width = `${j}%`;
    redNumber.innerText = i;
    blueNumber.innerText = j;
  } else {
    redNumber.innerText = `Winner`;
    return;
  }
});

blue.addEventListener("click", () => {
  if (j < 100) {
    j = j + 5;
    i = i - 5;
    red.style.width = `${i}%`;
    blue.style.width = `${j}%`;
    redNumber.innerText = i;
    blueNumber.innerText = j;
    console.log(i, j);
  } else {
    blueNumber.innerText = `Winner`;
    return;
  }
});

reset.addEventListener("click", () => {
  ``;
  red.style.width = `${50}%`;
  blue.style.width = `${50}%`;
  i = 50;
  j = 50;
  console.log(i);
  console.log(j);
  redNumber.innerText = i;
  blueNumber.innerText = j;
});

document.addEventListener("keyup", (event) => {
  if (event.key === "a") {
    if (i < 100) {
      i = i + 5;
      j = j - 5;
      console.log(i, j);

      red.style.width = `${i}%`;
      blue.style.width = `${j}%`;
      redNumber.innerText = i;
      blueNumber.innerText = j;
    } else {
      redNumber.innerText = `Winner`;
      return;
    }
  } else if (event.key === "l") {
    if (j < 100) {
      j = j + 5;
      i = i - 5;
      red.style.width = `${i}%`;
      blue.style.width = `${j}%`;
      redNumber.innerText = i;
      blueNumber.innerText = j;
      console.log(i, j);
    } else {
      blueNumber.innerText = `Winner`;
      return;
    }
  }
});

document.addEventListener("keyup", (event) => {
  if (event.key === "r") {
    red.style.width = `${50}%`;
    blue.style.width = `${50}%`;
    i = 50;
    j = 50;
    console.log(i);
    console.log(j);
    redNumber.innerText = i;
    blueNumber.innerText = j;
  }
});
