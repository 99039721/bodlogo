// const addItem = document.getElementById("addItem");
// const itemContainer = document.getElementById("itemContainer");
// let text = ` Sain baina uu ? `;

// const localItemExisting = window.localStorage.getItem("greeting");

// if (localItemExisting != undefined) {
//   itemContainer.innerHTML = localItemExisting;
// }

// const itemAdder = () => {
//   window.localStorage.setItem("password", text);
// };

const email = document.getElementById("email");
const passport = document.getElementById("passport");
const logIn = document.getElementById("logIn");

email.addEventListener("keyup", () => {
  const emails = window.localStorage.getItem("emails");

  if (email.value.length >= 23) {
    itemContainer.innerHTML = "";
  }

  if (email.value.length >= 24) {
    if (email.value == emails) {
      itemContainer.innerHTML = "Success";
    } else {
      itemContainer.innerHTML = "Error, otp is not correct";
    }
  }
});

// logIn.addEventListener("click", () => {
//   const passports = window.localStorage.getItem("passport");
//   const emails = window.localStorage.getItem("emails");
//   if (email.value === emails && passport.value === passports) {
//     itemContainer.innerHTML = "Success";
//   } else {
//     itemContainer.innerHTML = "Error, otp is not correct";
//   }
// });
