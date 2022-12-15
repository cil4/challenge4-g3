import { productoServices } from "../servicios/producto-servicios.js";
import { formatPrice } from "../formatterPrices.js";

const nuevoProduto = (name, price, imageUrl, categoria,id) => {
  const card = document.createElement("div");
  const contenido = `
  
        <div class="produto" id="${categoria}">
            <img src="${imageUrl}" alt="img">
            <h1 class="product-name"> ${name} </h1>
            <p class="preco">${formatPrice(price)}</p>
            <a class="ver-produto" href="../../screens/detalle-producto.html?id=${id}">Ver Producto</a>
        </div>   
    
    `;
  card.innerHTML = contenido;
  card.dataset.id = id;

  return card;
};

const categoria1 = "producto";
const categoria2 = "consola";
const categoria3 = "diverso";

const productos = document.querySelector("[data-product]");
const consolas = document.querySelector("[data-consola]");
const diversos = document.querySelector("[data-diverso]");

let contadorProd = 0;
let contadorCons= 0;
let contadorDiv = 0;

productoServices.listaProductos().then((data)=>{
  data.forEach(({imageUrl, categoria, name, price,id})=>{
    //if (screen.width > 768) {
      if (categoria === categoria1 && contadorProd < 6) {
        const nuevaLinea = nuevoProduto(name, price,imageUrl,categoria,id);
        productos.appendChild(nuevaLinea);
        contadorProd++;
  };
  if(categoria===categoria2 && contadorCons <6){
    const nuevaLinea = nuevoProduto(name, price,imageUrl,categoria,id);
    consolas.appendChild(nuevaLinea);
    contadorCons++;
  };
  if(categoria===categoria3&&contadorDiv<6){
    const nuevaLinea = nuevoProduto(name, price,imageUrl,categoria,id);
    diversos.appendChild(nuevaLinea);
    contadorDiv++;
  };
//}
 /*else if (screen.width <= 768) {
  if (categoria === categoria1 && contadorProd < 4) {
    const nuevaLinea = nuevoProduto(imageUrl, categoria, price, name, id);
    productos.appendChild(nuevaLinea);
    contadorProd++;
  }
  if (categoria === categoria2 && contadorCons < 4) {
    const nuevaLinea = nuevoProduto(imageUrl, categoria,name, price, id);
    consolas.appendChild(nuevaLinea);
    contadorCons++;
  }
  if (categoria === categoria3 && contadorDiv < 3) {
    const nuevaLinea = nuevoProduto(imageUrl, categoria, name, price, id);
    diversos.appendChild(nuevaLinea);
    contadorDiv++;
  }
//}
}); */
  })
}).catch((err) => {
  console.log(err);
});



      
