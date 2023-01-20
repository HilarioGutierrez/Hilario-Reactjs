import { Box, Container, Heading, Image, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import data from '../../vinos.json';
import Comprar from '../Botones/Comprar';
import ItemCount from '../ItemCount'
const ItemDetailContent = () => {
  const { name } = useParams()
  const vino = data.find((vino) => vino.nombre === name)
  useEffect(() => {
    vino
  }, [])

  return (
    <Container display='flex' flexDirection='column'>
      <Heading alignSelf='center'>{vino.nombre}</Heading>
      <Image className='imgDetail' alignSelf='center' src={`${vino.img}`} width={60}></Image>
      <Text alignSelf='center'>{vino.descripcion}</Text>
      <Text fontWeight='bold' fontSize='2rem' marginRight='3'>{`$${vino.precio}`}</Text>
      <Box display='flex' flexDirection='column' margin='2' >
        <ItemCount />
        <Comprar textBoton={"Comprar"} />
      </Box>
    </Container>
  )
}

export default ItemDetailContent
