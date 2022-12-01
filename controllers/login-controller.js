import { loginService } from "../servicios/usuario-servicio.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const email = document.querySelector("[data-email]").value;
  const password = document.querySelector("[data-password]").value;


  let valid = false;

loginService.login()
    .then((data) => {
        data.forEach((user) => {
            if(email === user.email && password === user.password) {
                valid = true;
            }
        }); 
        
        if(valid) {
            
            window.location.href = "../screens/produto.html";
        } else {
            alert('Combinación email-password inválida')
        }
    })
    .catch((error) => alert('Ocurrio un error, intente más tarde.'));    

})