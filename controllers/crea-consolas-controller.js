import { consolaServices } from "../servicios/consola-servicios.js";

const form = document.querySelector("[data-formConsola]");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = document.querySelector("[data-nombreConsola]").value;
  const url = document.querySelector("[data-urlConsola]").value;
  const preco = document.querySelector("[data-precioConsola]").value;
  const categ = document.querySelector("[data-consola]").value;

  consolaServices.creaConsolas(nome, url, preco,categ)
    .then((resposta) => {
      window.location.href = "../screens/produto.html";
      console.log(resposta);
    })
    .catch((err) => {
      console.log(err);
    });
});
