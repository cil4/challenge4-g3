const listaConsolas = () => fetch(" https://challenge4.onrender.com/consolas").then(respuesta => respuesta.json());



export const consolaServices = {
    listaConsolas
};