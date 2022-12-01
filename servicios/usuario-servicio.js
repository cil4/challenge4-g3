const loginUsuario = () => fetch(`https://challenge4.onrender.com/users`).then((respuesta) => respuesta.json());

      

  export const loginService = {
    loginUsuario
  }