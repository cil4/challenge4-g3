import { consolaServices} from "../servicios/consola-servicios.js"
import {productoServices}  from "../servicios/producto-servicios.js"
import {diversoServices} from "../servicios/diverso-servicios.js"


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
const getProducts = (name, price, imageUrl, id) => {
  const card = document.createElement("div");

  const contenido = `
    <div class="produto">
        <div class="container">
            <button class="buttonDelete" type="button">
              <img class="deleteImage" src="../assets/delete.png" alt="Deletar" />
            </button>
            
            <a href="../screens/edit-product.html?id=${id}">
            
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
const getDiversos = (name, price, imageUrl, id) => {
  const card = document.createElement("div");

  const contenido = `
    <div class="produto">
        <div class="container">
            <button class="buttonDelete" type="button">
              <img class="deleteImage" src="../assets/delete.png" alt="Deletar" />
            </button>
            
            <a href="../screens/editar-diverso.html/${id}">
            
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
const productos = document.querySelector("[data-allProducts]");
const diversos = document.querySelector("[data-allProducts]");

consolas.addEventListener("click", async (evento) => {
  let deleteButton = evento.target.className === "deleteImage";
  if (deleteButton) {
    const consola = evento.target.closest("[data-id]");
    let id = consola.dataset.id;
    consolaServices
      .deleteConsola(id)
      .then((res) => {
        consola.remove();
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
});

productos.addEventListener("click", async (evento) => {
  let deleteButton = evento.target.className === "deleteImage";
  if (deleteButton) {
    const producto = evento.target.closest("[data-id]");
    let id = producto.dataset.id;
    productoServices
      .deleteProducto(id)
      .then((res) => {
        producto.remove();
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
});

diversos.addEventListener("click", async (evento) => {
  let deleteButton = evento.target.className === "deleteImage";
  if (deleteButton) {
    const diverso = evento.target.closest("[data-id]");
    let id = diverso.dataset.id;
    diversoServices.deleteDiverso(id)
      .then((res) => {
        diverso.remove();
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
});



const render = async () => {
  try {
    const listaConsolas = await consolaServices.listaConsolas();

    listaConsolas.forEach((consola) => {
      consolas.appendChild(
        getConsolas(
          consola.name,
          consola.price,
          consola.imageUrl,
          consola.id
        )
      );
    });

        const listaProductos = await productoServices.listaProductos();
    
        listaProductos.forEach((producto) => {
          productos.appendChild(
            getProducts(
              producto.name,
              producto.price,
              producto.imageUrl,
              producto.id
            )
          );
        });

        const listaDiversos = await diversoServices.listaDiversos();
    
        listaDiversos.forEach((producto) => {
          diversos.appendChild(
            getDiversos(
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
