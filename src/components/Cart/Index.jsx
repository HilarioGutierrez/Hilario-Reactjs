import { Box, Button, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { UseCartContext } from '../../Context/CartContext'
import ItemCart from '../Item/ItemCart'


const Carrito = () => {

  const { carrito } = UseCartContext()

  if (carrito.length === 0) {
    return (
      <Box display='flex' flexDirection='column' justifyContent='space-around' alignItems='center' height='80vh' >
        <Heading> NO TIENE PRODUCTOS EN EL CARRITO </Heading>
        <Link to='/'><Button>Volver al Home</Button> </Link>
      </Box>
    )
  } else {
    return (
      <>
        {carrito.map((item) => <ItemCart key={item.id} item={item} />)}
      </>
    )
  }
}

export default Carrito