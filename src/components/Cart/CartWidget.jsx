import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const CartWidget = ({notificacion}) => {
    return (
        <Box className='divCarritoNav'>
            <Image width={45} src="https://res.cloudinary.com/dey3fcafu/image/upload/v1674179467/React%20JS/carrito-de-compras_p5o4ew.png" alt="" />
            <Text className='carritoNotificacion'>{notificacion}</Text>
        </Box>
    )
}

export default CartWidget
