const listaDiversos = () => fetch(" https://challenge4.onrender.com/diversos").then(respuesta => respuesta.json());



export const diversoServices = {
    listaDiversos
};