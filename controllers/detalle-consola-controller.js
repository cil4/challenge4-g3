import { consolaServices } from "../servicios/consola-servicios.js";


const getURL = new URL(window.location);

const id = getURL.searchParams.get("id");

const inputImageUrl = document.querySelector("[data-urlConsola]");
const inputNombre = document.querySelector("[data-nombreConsola]");
const inputPrecio = document.querySelector("[data-precioConsola]");
const inputDescripcion = document.querySelector("[data-descripcionConsola]");

consolaServices.listarUnaConsola(id).then((datos) => {
  inputImageUrl.setAttribute("src", datos.imageUrl);
 
  inputNombre.value = datos.name;
  inputPrecio.value = datos.price;
  inputDescripcion.value = datos.description;
});




