import { productoServices } from "../servicios/producto-servicios.js";
import { formatPrice } from "../formatterPrices.js";

const getDiversos = (name, price, imageUrl,categoria,id) => {
  const card = document.createElement("div");

  const contenido = `
    <div class="produto" ${categoria}>
        
        
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

const diversos = document.querySelector("[data-Diversos]");
const categoria3 = "diverso";

let contadorDiv = 0;

productoServices.listaProductos().then((data)=>{
      data.forEach(({imageUrl, categoria, name, price,id})=>{
       
          if (categoria === categoria3) {
            const nuevaLinea = getDiversos(name, price,imageUrl,categoria,id);
          diversos.appendChild(nuevaLinea);
          contadorDiv++;
      };
    })
  }).catch((err) => {
    console.log(err);
  });

   
 
