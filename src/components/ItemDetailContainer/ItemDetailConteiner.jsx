import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../../../public/vinos.json';
import Comprar from '../Botones/Comprar';
import ItemCount from '../ItemCount/ItemCount';
import './itemdetail.css'

const ItemDetailConteiner = () => {
  const { name } = useParams()
  const vino = data.find((vino) => vino.nombre === name)
  useEffect(() => {
    vino
  }, [])

  const [contador, setcontador] = useState(1)
  
  return (
      <Box  display='flex' flexDirection='column'>
        <Heading alignSelf='center' margin='25px'>{vino.nombre}</Heading>
        <Image className='imgDetail' alignSelf='center' src={`${vino.img}`} width={60}></Image>
        <Text fontSize="0.9rem" alignSelf='center' color='#857c8d'>Disponibles: {vino.stock}</Text>
        <Text width={500} alignSelf='center' fontStyle='italic'>{vino.descripcion}</Text>
        <Text fontWeight='bold' fontSize='2rem' alignSelf='center' marginRight='3'>{`$${vino.precio}`}</Text>
        <Box display='flex' flexDirection='row' alignSelf='center' margin='2' >
          <ItemCount/>
        </Box>
      </Box>
  )
}

export default ItemDetailConteiner
