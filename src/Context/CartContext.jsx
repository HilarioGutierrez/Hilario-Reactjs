import { createContext, useContext, useState } from "react";
const cartContext = createContext('')
export const UseCartContext = () => useContext(cartContext)

const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])

    const clearCart = () => setCart([]); // funcion para vaciar o limpiar el carrito
    const isInCart = (id) => cart.find(product => product.id === id) ? true : false; //Funcion que busca id del product en el cart para no duplicarlo 
    const removeCart = (id) => setCart(cart.filter(product => product.id !== id)); // Funcion que por filter arma un array con los productos que no tengan el id seleccionado. 

    const agregarProducto = (vino, cantidad) => {
        let nuevoCarrito;
        let productoEnCarrito = carrito.find(product => product.id === vino.id);
        if (productoEnCarrito) {
            productoEnCarrito.cantidad = + cantidad;
            nuevoCarrito = [...carrito];
        } else {
            productoEnCarrito = { ...vino, cantidad: cantidad };
            nuevoCarrito = [...carrito, productoEnCarrito];
        }
        setCarrito(nuevoCarrito);
        
        console.log(`Carrito : ${JSON.stringify(carrito.length)}`);

        console.log(`Carrito : ${JSON.stringify(carrito)}`);
    }

    return (
        <>
            <cartContext.Provider value={{
                clearCart,
                isInCart,
                removeCart,
                agregarProducto
            }}>
                {children}
            </cartContext.Provider>
        </>
    )
}

export default CartProvider
