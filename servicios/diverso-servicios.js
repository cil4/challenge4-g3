//GET
const listaDiversos = () =>
  fetch("https://challenge4.onrender.com/diversos")
    .then((resposta) => resposta.json())
    .catch((error) => console.log(error));

const listarDiverso = (id) => {
  return fetch(`https://challenge4.onrender.com/diversos/${id}`).then((resposta) => {
    return resposta.json();
  });
};

//POST
const creaDiverso = (name, imageUrl, price) => {
  return fetch(`https://challenge4.onrender.com/diversos`, {
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
    throw new Error("No fue posible agregar el producto");
  });
};

// PUT/PATCH
const alteraDiverso = async (id,imageUrl, name, price, description) => {
  return fetch(`https://challenge4.onrender.com/diversos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      imageUrl,
      name,
      price,
      description
    }),
  })
    .then((resposta) => {
      return resposta.json();
    })
    .catch((error) => console.log(error));
};

// DELETE
const deleteDiverso = async (id) => {
  return await fetch(`https://challenge4.onrender.com/diversos/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const diversoServices = {
    listaDiversos,
    listarDiverso,
    creaDiverso,
    alteraDiverso,
    deleteDiverso

};
