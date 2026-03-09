const signBtn = document.getElementById("btn-signIn");

signBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const userNameField = document.getElementById("signIn-userName");
  const userPasswordField = document.getElementById("signIn-password");

  const userValue = userNameField.value.trim();
  const passwordValue = userPasswordField.value.trim();

  if (userValue !== "admin") {
    alert("Invalid username!");
    return;
  }

  if (passwordValue !== "admin123") {
    alert("InvaLid password!");
    return;
  }

  // Login successful → redirect to main.html
  window.location.href = "./main.html";
});