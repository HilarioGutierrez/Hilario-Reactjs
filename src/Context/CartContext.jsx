import { createContext, useContext, useState } from "react";
const cartContext = createContext('')
export const UseCartContext = () => useContext(cartContext)

const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])

    // funcion para vaciar o limpiar el carrito
    const vaciarCarrito = () => setCarrito([]);

    //Funcion que busca id del product en el cart para no duplicarlo 
    const estaEnElCarrito = (id) => carrito.find(product => product.id === id) ? true : false;

    // Funcion para remover productos del carrito
    const eliminarProducto = (id) => setCarrito(carrito.filter(product => product.id !== id));

    // Funcion que agrega productos al carrito
    const agregarProducto = (vino, cantidad) => {
        let nuevoCarrito;
        let productoEnCarrito = carrito.find(product => product.id === vino.id);
        if (productoEnCarrito) {
            productoEnCarrito.cantidad += cantidad;
            nuevoCarrito = [...carrito];
        } else {
            productoEnCarrito = { ...vino, cantidad: cantidad };
            nuevoCarrito = [...carrito, productoEnCarrito];
        }
        setCarrito(nuevoCarrito);
    }

    // Funcion que suma el total de los productos del carrito
    const total = () => {
        return carrito.reduce((acumulador, producto) => acumulador + producto.precio * producto.cantidad, 0);
    }
    // Funcion que suma la cantidad de productos del carrito
    const productosEnCarrito = () => {
        return carrito.reduce((acumulador, producto) => acumulador + producto.cantidad, 0);
    }

    //--->funciones de storage<---//
    const guardarCarritoStorage = (carritoDeCompras) => {
        localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));
    };
    //--->Obtener Storage<---//
    const obtenerCarritoStorage = () => {
        const carritoStorage = JSON.parse(localStorage.getItem("carrito"));
        return carritoStorage;
    }

    //--->Funcion para limpar storage<---//
    const borrarStorage = (clave) => {
        localStorage.removeItem(clave)
    }

    return (
        <>
            <cartContext.Provider value={{
                vaciarCarrito,
                estaEnElCarrito,
                eliminarProducto,
                agregarProducto,
                total,
                productosEnCarrito,
                guardarCarritoStorage,
                obtenerCarritoStorage,
                borrarStorage,
                setCarrito,
                carrito
            }}>
                {children}
            </cartContext.Provider>
        </>
    )
}

export default CartProvider
