import { consolaServices } from "../servicios/consola-servicios.js";
import { formatPrice } from "../formatterPrices.js";


const getDetalleConsola = (name, price, imageUrl, id) => {
    const card = document.createElement("div");
  
    const contenido = `
      <div class="produts__details" id=${id}>
      
          
          <img src="${imageUrl}" alt="img">
          <h1 class="product-name"> ${name} </h1>
          <p class="preco">${formatPrice(price)}</p>
      </div>
      `;
    card.innerHTML = contenido;
    card.dataset.id = id;
    return card;
  };

  const consola = document.querySelector("[data-detalleConsola"); 

 const render = async () => {
    try {
      const detalleConsola = await consolaServices.listarUnaConsola();
  
      detalleConsola = (producto) => {
        consola.appendChild(
          getDetalleConsola(
            producto.name,
            producto.price,
            producto.imageUrl,
            producto.id
          )
        );
      };
    } catch (err) {
      console.log(err);
    }
  };
  
  render();
