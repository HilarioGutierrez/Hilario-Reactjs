import { Box, Button, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { UseCartContext } from '../../Context/CartContext'
import Comprar from '../Botones/Comprar'
import ItemCart from '../Item/ItemCart'

const Carrito = () => {

  const { carrito, total, guardarCarritoStorage } = UseCartContext()

  guardarCarritoStorage(JSON.stringify(carrito))

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
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Heading fontSize='1.5rem' alignSelf='end' padding={5} margin={3}>Total: ${total()}</Heading>
          <Link to='/checkout' className='linkDecoration'><Button colorScheme='green' margin={3} padding={5} fontSize='1.2rem' width='80vw'>Finalizar compra</Button></Link>
        </Box>
      </Box>
    )
  }
}

export default Carrito