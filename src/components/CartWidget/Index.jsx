import { Box, Image, Text } from '@chakra-ui/react'
import { UseCartContext } from '../../Context/CartContext'

const CartWidget = () => {
    const { productosEnCarrito } = UseCartContext()
    
    if(productosEnCarrito !== 0){
        return (
            <Box className='divCarritoNav'>
            <Image width={45} src="https://res.cloudinary.com/dey3fcafu/image/upload/v1674179467/React%20JS/carrito-de-compras_p5o4ew.png" alt="" />
            <Text className='carritoNotificacion'>{productosEnCarrito() || ''}</Text>
        </Box>
    )} else {<Box className='divCarritoNav'>
    <Image width={45} src="https://res.cloudinary.com/dey3fcafu/image/upload/v1674179467/React%20JS/carrito-de-compras_p5o4ew.png" alt="" />
    <Text className='carritoNotificacion'></Text>
</Box>}
}

export default CartWidget
