//GET
const listaProductos = () =>
  fetch("https://challenge4.onrender.com/producto")
    .then((resposta) => resposta.json())
    .catch((error) => console.log(error));

const listarUnProduto = (id) => {
  return fetch(`https://challenge4.onrender.com/producto/${id}`).then((resposta) => {
    return resposta.json();
  });
};

//POST
const creaProdutos = (name, imageUrl, price) => {
  return fetch(`https://challenge4.onrender.com/producto`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      imageUrl,
      price,
    }),
  }).then((resposta) => {
    if (resposta.ok) {
      return resposta.body;
    }
    throw new Error("Não foi possível criar um produto");
  });
};

// PUT/PATCH
const alteraProduto = async (id, name, price, description) => {
  return fetch(`https://challenge4.onrender.com/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      price,
      description,
    }),
  })
    .then((resposta) => {
      return resposta.json();
    })
    .catch((error) => console.log(error));
};

// DELETE
const deleteProducto = async (id) => {
  return await fetch(`https://challenge4.onrender.com/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const productoServices = {
  listaProductos,
  listarUnProduto,
  creaProdutos,
  alteraProduto,
  deleteProducto,
};
