import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const CartWidget = () => {
    return (
        <Box className='divCarritoNav'>
            <Image width={45} src="src/assets/carrito-de-compras.png" alt="" />
            <Text className='carritoNotificacion'>0</Text>
        </Box>
    )
}

export default CartWidget
