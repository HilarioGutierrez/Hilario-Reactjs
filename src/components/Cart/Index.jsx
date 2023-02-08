import { Box, Button, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { UseCartContext } from '../../Context/CartContext'
import ItemCart from '../Item/ItemCart'


const Carrito = () => {

  const { carrito, total } = UseCartContext()

  if (carrito.length === 0) {
    return (
      <Box display='flex' flexDirection='column' justifyContent='space-around' alignItems='center' height='80vh' >
        <Heading> NO TIENE PRODUCTOS EN EL CARRITO </Heading>
        <Link to='/'><Button>Volver al Home</Button> </Link>
      </Box>
    )
  } else {
    return (
      <Box>
        {carrito.map((item) => <ItemCart key={item.id} item={item} />)}
        <hr />
        <Heading fontSize='1.5rem' textAlign='end' padding={5} margin={3}>Total: ${total()}</Heading>
      </Box>
    )
  }
}

export default Carrito