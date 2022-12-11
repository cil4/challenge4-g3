import { productoServices } from "../servicios/producto-servicios.js";

const getURL = new URL(window.location);

const id = getURL.searchParams.get("id");

const inputImageUrl = document.querySelector("[data-url]");
const inputCateg = document.querySelector("[data-producto]");
const inputNombre = document.querySelector("[data-nome]");
const inputPrecio = document.querySelector("[data-preco]");
const inputDescripcion = document.querySelector("[data-descripcion]");


productoServices.listarUnProduto(id).then((datos) => {
  inputImageUrl.setAttribute("src", datos.imageUrl);
 inputImageUrl.value = datos.imageUrl;
  inputNombre.value = datos.name;
  inputPrecio.value = datos.price;
  inputDescripcion.value = datos.description;
  inputCateg.value = datos.categoria;
});

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  productoServices
    .alteraProduto(
      id,
      inputCateg.value,
      inputImageUrl.value,
      inputNombre.value,
      inputPrecio.value,
      inputDescripcion.value,
    
    )
    .then(() => {
      window.location.href = "../screens/produto.html";
    });
});
