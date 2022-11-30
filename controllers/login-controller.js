import { loginService } from "../servicios/usuario-servicio.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const email = document.querySelector("[data-email]").value;
  const password = document.querySelector("[data-password]").value;

  
  if ((email.length > 5 && email.value===loginService.login.email.value )&& (password.length > 5) && password.value===loginService.login.password.value) {
    window.location.href = "../screens/produto.html";
  } else {
    alert("Ingrese más de 5 caracteres en el email y la contraseña.");
  }
});
