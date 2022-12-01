import { diversoServices } from "../servicios/diverso-servicios.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = document.querySelector("[data-nome]").value;
  const url = document.querySelector("[data-url]").value;
  const preco = document.querySelector("[data-preco]").value;

  diversoServices.creaDiverso(nome, url, preco)
    .then((resposta) => {
      window.location.href = "../screens/produto.html";
      console.log(resposta);
    })
    .catch((err) => {
      console.log(err);
    });
});
