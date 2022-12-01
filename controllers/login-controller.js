import { loginService } from "../servicios/usuario-servicio.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const email = document.querySelector("[data-email]").value;
  const password = document.querySelector("[data-password]").value;

  
  if ((email && password)==loginService.login(email,password)) {
    window.location.href = "../screens/produto.html";
  } else {
    alert("email o contraseña incorrectos");
  }
});
