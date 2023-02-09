import { Box, Button, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { UseCartContext } from '../../Context/CartContext'
import Comprar from '../Botones/Comprar'
import ItemCart from '../Item/ItemCart'

const Carrito = () => {

  const { carrito, total } = UseCartContext()

  if (carrito.length === 0) {
    return (
      <Box display='flex' flexDirection='column' justifyContent='space-around' alignItems='center' height='68vh' >
        <Heading> NO TIENE PRODUCTOS EN EL CARRITO  </Heading>
        <Text fontStyle='italic'>Por favor, agregue productos al carrito</Text>
        <Link className='linkDecoration' to='/todos-los-vinos'><Comprar textBoton='Todos los vinos' /> </Link>
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