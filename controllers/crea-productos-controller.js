import { productoServices } from "../servicios/producto-servicios.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = document.querySelector("[data-nome]").value;
  const url = document.querySelector("[data-url]").value;
  const preco = document.querySelector("[data-preco]").value;
  const categ = document.querySelector("[data-producto]").value;

  productoServices
    .creaProdutos(nome, url, preco,categ)
    .then((resposta) => {
      window.location.href = "../index.html";
      console.log(resposta);
    })
    .catch((err) => {
      console.log(err);
    });
});
