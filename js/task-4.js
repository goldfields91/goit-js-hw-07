const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const data = [];
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  } else {
    data.email = email.trim();
    data.password = password.trim(); //а нашо за завданням взагалі трімувати пароль? може в нього пароль з пробілів?
    console.log(data);
    form.reset();
  }
}
