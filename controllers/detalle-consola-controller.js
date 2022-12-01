import { consolaServices } from "../servicios/consola-servicios.js";


const getURL = new URL(window.location);

const id = getURL.searchParams.get("id");

const inputImageUrl = document.querySelector("[data-url]");
const inputNombre = document.querySelector("[data-nombre]");
const inputPrecio = document.querySelector("[data-precio]");
const inputDescripcion = document.querySelector("[data-descripcion]");

consolaServices.listarUnaConsola(id).then((datos) => {
  inputImageUrl.setAttribute("src", datos.imageUrl);
 /*inputImageUrl.value = datos.imageUrl;*/
  inputNombre.value = datos.name;
  inputPrecio.value = datos.price;
  inputDescripcion.value = datos.description;
});




