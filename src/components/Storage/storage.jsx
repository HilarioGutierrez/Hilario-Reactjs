//--->funciones de storage<---//
export const guardarCarritoStorage = (carritoDeCompras) => {
    localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));
};
//--->Obtener Storage<---//
export const obtenerCarritoStorage = () => {
    const carritoStorage = JSON.parse(localStorage.getItem("carrito"));
    return carritoStorage;
}

//--->Funcion para limpar storage<---//
export const borrarStorage = (clave) => {
    localStorage.removeItem(clave)
}