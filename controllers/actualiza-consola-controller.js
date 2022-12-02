import { consolaServices } from "../servicios/consola-servicios";

const getURL = new URL(window.location);

const id = getURL.searchParams.get("id");

const inputImageUrl = document.querySelector("[data-url]");
const inputNombre = document.querySelector("[data-nombre]");
const inputPrecio = document.querySelector("[data-precio]");
const inputDescripcion = document.querySelector("[data-descripcion]");

consolaServices.listarUnaConsola(id).then((datos) => {
  inputImageUrl.setAttribute("src", datos.imageUrl);
 inputImageUrl.value = datos.imageUrl;
  inputNombre.value = datos.name;
  inputPrecio.value = datos.price;
  inputDescripcion.value = datos.description;
});

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  consolaServices.alteraConsola(
      id,
      inputImageUrl.value,
      inputNombre.value,
      inputPrecio.value,
      inputDescripcion.value
    )
    .then(() => {
      window.location.href = "../screens/produto.html";
    });
});
