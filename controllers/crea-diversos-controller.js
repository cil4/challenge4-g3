import { diversoServices } from "../servicios/diverso-servicios.js";

const form = document.querySelector("[data-formDiverso]");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = document.querySelector("[data-nomeDiverso]").value;
  const url = document.querySelector("[data-urlDiverso]").value;
  const preco = document.querySelector("[data-precoDiverso]").value;
  const categ = document.querySelector("[data-diverso]").value;

  diversoServices.creaDiverso(nome, url, preco,categ)
    .then((resposta) => {
      window.location.href = "../screens/produto.html";
      console.log(resposta);
    })
    .catch((err) => {
      console.log(err);
    });
});
