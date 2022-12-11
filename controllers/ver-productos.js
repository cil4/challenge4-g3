import { productoServices } from "../servicios/producto-servicios.js";
import { formatPrice } from "../formatterPrices.js";

const getProd = (name, price, imageUrl, categoria, id) => {
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

const productos = document.querySelector("[data-starWars]");
const categoria1 = "producto";

let contadorProd = 0;

productoServices.listaProductos().then((data)=>{
      data.forEach(({imageUrl, categoria, name, price,id})=>{
       
          if (categoria === categoria1) {
            const nuevaLinea = getProd(name, price,imageUrl,categoria,id);
          productos.appendChild(nuevaLinea);
          contadorProd++;
      };
    })
  }).catch((err) => {
    console.log(err);
  });

   
 
