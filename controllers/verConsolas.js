import { consolaServices } from "../servicios/consola-servicios.js";
import { formatPrice } from "../formatterPrices.js";

const getConsolas = (name, price, imageUrl, id) => {
  const card = document.createElement("div");

  const contenido = `
    <div class="produto">
        <div class="container">
            <button class="buttonDelete" type="button">
              <img class="deleteImage" src="../assets/delete.png" alt="Deletar" />
            </button>
            
            <a href="../screens/editar-consola.html?id=${id}">
            
              <button class="buttonEdit" type="button">
                <img class="editImage" src="../assets/edit.png" alt="Editar" />
              </button>
            
            </a>
        </div>
        
        <img src="${imageUrl}" alt="img">
        <h1 class="product-name"> ${name} </h1>
        <p class="preco">${formatPrice(price)}</p>
    </div>
    `;
  card.innerHTML = contenido;
  card.dataset.id = id;
  return card;
};

const consolas = document.querySelector("[data-allProducts]");



const render = async () => {
  try {
    const listaConsolas = await consolaServices.listaConsolas();

    listaConsolas.forEach((producto) => {
      consolas.appendChild(
        getConsolas(
          producto.name,
          producto.price,
          producto.imageUrl,
          producto.id
        )
      );
    });
  } catch (err) {
    console.log(err);
  }
};

render();
