import { consolaServices } from "../servicios/consola-servicios.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = document.querySelector("[data-nome]").value;
  const url = document.querySelector("[data-url]").value;
  const preco = document.querySelector("[data-preco]").value;
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
