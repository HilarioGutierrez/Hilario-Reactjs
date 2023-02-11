import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import styles from './checkout.module.css'
const ItemCheckout = ({ item }) => {
    return (
        <Box display='flex' flexDirection=' row' alignItems='center' justifyContent='space-between' margin={5}>
            <Image className={styles.img} alt={item.nombre} src={item.img}></Image>
            <Box display='flex' flexDirection='column'>
                <Heading fontSize='1rem' fontStyle='italic'>{item.nombre}</Heading>
                <Box display='flex' flexDirection='row'>
                    <Text className={styles.texto}>Precio unitario: ${item.precio}</Text>
                    <Text className={styles.texto}>Cantidad: {item.cantidad}</Text>
                    <Text className={styles.texto}>Subtotal: ${item.cantidad * item.precio}</Text>
                </Box>
            </Box>
        </Box>
    )
}

export default ItemCheckout
