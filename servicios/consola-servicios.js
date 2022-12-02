//GET
const listaConsolas = () =>
  fetch("https://challenge4.onrender.com/consolas")
    .then((resposta) => resposta.json())
    .catch((error) => console.log(error));

const listarUnaConsola = (id) => {
  return fetch(`https://challenge4.onrender.com/consolas/${id}`).then((resposta) => {
    return resposta.json();
  });
};

//POST
const creaConsolas = (name, imageUrl, price) => {
  return fetch(`https://challenge4.onrender.com/consolas`, {
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
    throw new Error("No fue posible agregar la consola");
  });
};

// PUT/PATCH
const alteraConsola = async (id,imageUrl, name, price, description) => {
  return fetch(`https://challenge4.onrender.com/consolas/${id}`, {
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
const deleteConsola = async (id) => {
  return await fetch(`https://challenge4.onrender.com/consolas/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const consolaServices = {
  listaConsolas,
  listarUnaConsola,
  creaConsolas,
  alteraConsola,
  deleteConsola

};
