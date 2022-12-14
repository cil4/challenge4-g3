import { productoServices } from "../servicios/producto-servicios.js";
import { formatPrice } from "../formatterPrices.js";

const getConsolas = (name, price, imageUrl, categoria,id) => {
  const card = document.createElement("div");

  const contenido = `
  
  <div class="produto" id=${categoria}>
        <img src="${imageUrl}" alt="img">
        <h1 class="product-name"> ${name} </h1>
        
        <p class="preco">${formatPrice(price)}</p>
        <a class="ver-produto" href="../screens/detalle-producto.html?id=${id}">Ver Producto</a>

    </div>
    
    `;
  card.innerHTML = contenido;
  card.dataset.id = id;
  return card;
};

const consolas = document.querySelector("[data-Consolas]");
const categoria2 = "consola";

let contadorConsola = 0;

productoServices.listaProductos().then((data)=>{
      data.forEach(({imageUrl, categoria, name, price,id})=>{
       
          if (categoria === categoria2) {
            const nuevaLinea = getConsolas(name, price,imageUrl,categoria,id);
          consolas.appendChild(nuevaLinea);
          contadorConsola++;
      };
    })
  }).catch((err) => {
    console.log(err);
  });

   
 
