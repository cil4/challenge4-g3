const listaProductos = () => fetch(" https://challenge4.onrender.com/producto").then(respuesta => respuesta.json());



export const productoServices = {
    listaProductos
};
