import { consolaServices } from "../servicios/consola-servicios.js";
import { formatPrice } from "../formatterPrices.js";

const nuevaConsola = (name, price, imageUrl, id) => {
  const card = document.createElement("div");
  const contenido = `
        <div class="produto">
            <img src="${imageUrl}" alt="img">
            <h1 class="product-name"> ${name} </h1>
            <p class="preco">${formatPrice(price)}</p>
            <a class="ver-produto" href="../screens/produto.html?id=${id}">Ver Producto</a>
        </div>   
    `;
  card.innerHTML = contenido;
  card.dataset.id = id;

  return card;
};

const consolas = document.querySelector("[data-consola]");

const render = async () => {
  try {
    const listaConsolas = await consolaServices.listaConsolas();
    listaConsolas.forEach((elemento) => {
      consolas.appendChild(
        nuevaConsola(
          elemento.name,
          elemento.price,
          elemento.imageUrl,
          elemento.id
        )
      );
    });
  } catch (erro) {
    console.log(erro);
  }
};

render();
