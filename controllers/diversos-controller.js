import { diversoServices } from "../servicios/diverso-servicios.js";
import { formatPrice } from "../formatterPrices.js";

const nuevoDiverso = (name, price, imageUrl, id) => {
  const card = document.createElement("div");
  const contenido = `
        <div class="produto">
            <img src="${imageUrl}" alt="img">
            <h1 class="product-name"> ${name} </h1>
            <p class="preco">${formatPrice(price)}</p>
            <a class="ver-produto" href="./screens/detalle-diverso.html?id=${id}">Ver Producto</a>
        </div>   
    `;
  card.innerHTML = contenido;
  card.dataset.id = id;

  return card;
};

const diversos = document.querySelector("[data-diverso]");

const render = async () => {
  try {
    const listaDiversos = await diversoServices.listaDiversos();
    listaDiversos.forEach((elemento) => {
      diversos.appendChild(
        nuevoDiverso(
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
