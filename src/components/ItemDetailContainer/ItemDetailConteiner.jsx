import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import data from '../../../public/vinos.json';
import Comprar from '../Botones/Comprar';
import ItemCount from '../ItemCount'
import './itemdetail.css'

const ItemDetailConteiner = () => {
  const { name } = useParams()
  const vino = data.find((vino) => vino.nombre === name)
  useEffect(() => {
    vino
  }, [])

  
  return (
      <Box  display='flex' flexDirection='column'>
        <Heading alignSelf='center'>{vino.nombre}</Heading>
        <Image className='imgDetail' alignSelf='center' src={`${vino.img}`} width={60}></Image>
        <Text width={500} alignSelf='center'>{vino.descripcion}</Text>
        <Text fontWeight='bold' fontSize='2rem' alignSelf='center' marginRight='3'>{`$${vino.precio}`}</Text>
        <Box display='flex' flexDirection='column' alignSelf='center' margin='2' >
          <ItemCount />
          <Comprar textBoton={"Comprar"} />
        </Box>
      </Box>
  )
}

export default ItemDetailConteiner
