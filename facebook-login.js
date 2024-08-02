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

// email.addEventListener("keyup", () => {
//   const emails = window.localStorage.getItem("emails");

//   if (email.value.length >= 23) {
//     itemContainer.innerHTML = "";
//   }

//   if (email.value.length >= 24) {
//     if (email.value == emails) {
//       itemContainer.innerHTML = "Success";
//     } else {
//       itemContainer.innerHTML = "Error, otp is not correct";
//     }
//   }
// });

const userName = document.getElementById("userName");
const password = document.getElementById("password");
const button = document.getElementById("logIn");

button.addEventListener("click", () => {
  if (!userName.value || !password.value) {
    alert("fill the inputs");
    return;
  }

  const passwords = window.localStorage.getItem(userName.value);

  if (!passwords) {
    alert("password or user wrong");
    return;
  }

  if (password.value == passwords) {
    alert("Successfully logged in");
    window.localStorage.getItem(userName.value);
    window.location.href = "./facebook-home.html";
  }
});
