const isLoggedIn = window.localStorage.getItem("token");
if (isLoggedIn) {
  window.location.href = "./";
}

const userName = document.getElementById("userName");
const passportFirst = document.getElementById("passportFirst");
const passportSecond = document.getElementById("passportSecond");
const register = document.getElementById("register");

register.addEventListener("click", () => {
  if (!userName.value && !passportFirst.value && !passportSecond.value) {
    alert("Ali neg ni hooson bna");
    return;
  }

  if (passportFirst.value != passportSecond.value) {
    alert("Hoyor passport taarahgui bna");
    return;
  }
  window.localStorage.setItem(
    userName.value,
    passportFirst.value,
    passportSecond.value
  );
  alert("Success");
  console.log(userName.value);
  window.location.href = "./facebook-login.html";
});
