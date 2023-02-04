import { createContext, useContext, useState } from "react";
const cartContext = createContext('')
export const UseCartContext = () => useContext(cartContext)

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const clearCart = () => setCart([]); // funcion para vaciar o limpiar el carrito
    const isInCart = (id) => cart.find(product => product.id === id) ? true : false; //Funcion que busca id del product en el cart para no duplicarlo 
    const removeCart = (id) => setCart(cart.filter(product => product.id !== id)); // Funcion que por filter arma un array con los productos que no tengan el id seleccionado. 

const addProduct = (item, newQuantity) => {
        const newCart = cart.filter(product => product.id !== item.id);
        newCart.push({ ...item, cantidad: newQuantity });
        setCart(newCart);
    }
console.log(`Carrito : ${JSON.stringify(cart)}`);
    return (
        <>
            <cartContext.Provider value={{
                clearCart,
                isInCart,
                removeCart,
                addProduct
            }}>
                {children}
            </cartContext.Provider>
        </>
    )
}

export default CartProvider
