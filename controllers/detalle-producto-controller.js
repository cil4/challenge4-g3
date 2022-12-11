import { productoServices } from "../servicios/producto-servicios.js";
import { formatPrice } from "../formatterPrices.js";





const getURL = new URL(window.location);

const id = getURL.searchParams.get("id");




const nuevoProduto = (name, price, imageUrl, id, categoria, description) => {
  const card = document.createElement("div");
  const contenido = `
        <div id="${id}">

            <img src="${imageUrl}" alt="img ${name}">
        </div>
        <div>
            <h1 class="product-name">Nombre del producto: ${name} </h1>
            <h3 style="text-transform: uppercase"> Categoría: ${categoria}</h3>
            <h4 class="preco">${formatPrice(price)}</h4>
            <p class="descripcion_prod">${description}</p>
        </div>   
    `;
  card.innerHTML = contenido;
  card.dataset.id = id;

  return card;
};

const detalles = document.querySelector("[data-detalles]");

productoServices.listarUnProduto(id).then((data)=>{
  const nuevaLinea = nuevoProduto(data.name, data.price, data.imageUrl, data.id, data.categoria, data.description);
  detalles.appendChild(nuevaLinea);
}).catch((err) => {
  console.log(err);
});

