let userNameInput = document.getElementById("username");

let submitButton = document.getElementById("submitform");

let loginSection = document.getElementById("sign-in");

let welcomeText = document.getElementById("username-displayed-section");


submitButton.addEventListener('click', function() {
  if (!userNameInput.value) {
    alert("Please choose a username");
    return;
  }
  let username = userNameInput.value;
  welcomeText.classList.remove("hidden");
  document.getElementById("username-displayed").textContent = username;
  loginSection.classList.add("hidden");
});