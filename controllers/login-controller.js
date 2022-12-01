import { loginService } from "../servicios/usuario-servicio.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const email = document.querySelector("[data-email]").value;
  const password = document.querySelector("[data-password]").value;

  
  if ((email.length > 5 && email===loginService.login.email )&& (password.length > 5) && password===loginService.login.password) {
    window.location.href = "../screens/produto.html";
  } else {
    alert("Ingrese más de 5 caracteres en el email y la contraseña.");
  }
});
