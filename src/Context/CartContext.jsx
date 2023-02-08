import { createContext, useContext, useState } from "react";
const cartContext = createContext('')
export const UseCartContext = () => useContext(cartContext)

const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])

    console.log(`Carrito : ${JSON.stringify(carrito.length)}`);

    console.log(`Carrito : ${JSON.stringify(carrito)}`);
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
    const productosCarrito = () => {
        return carrito.reduce((acumulador, producto) => acumulador + producto.cantidad, 0);
    }

    return (
        <>
            <cartContext.Provider value={{
                vaciarCarrito,
                estaEnElCarrito,
                eliminarProducto,
                agregarProducto,
                total,
                productosCarrito,
                carrito
            }}>
                {children}
            </cartContext.Provider>
        </>
    )
}

export default CartProvider
