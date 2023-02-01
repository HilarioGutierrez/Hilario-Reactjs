import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import data from '../../../public/vinos.json';
import ItemCount from '../ItemCount/ItemCount';
import './itemdetail.css'
import { UseCartContext } from '../../Context/CartContext';
import Comprar from '../Botones/Comprar';


const ItemDetailConteiner = () => {
  const { name } = useParams()
  const vino = data.find((vino) => vino.nombre === name)
  useEffect(() => {
    vino
  }, [])
  const [goToCart, setGoToCart] = useState(false)
  const {addProduct} = UseCartContext()

  const onAdd = (quantity) => {
    setGoToCart(true)
    addProduct(data,quantity)
  }

  return (
    <Box display='flex' flexDirection='column'>
      <Heading alignSelf='center' margin='25px'>{vino.nombre}</Heading>
      <Image className='imgDetail' alignSelf='center' src={`${vino.img}`} width={60}></Image>
      <Text fontSize="0.9rem" alignSelf='center' color='#857c8d'>Disponibles: {vino.stock}</Text>
      <Text width={500} alignSelf='center' fontStyle='italic'>{vino.descripcion}</Text>
      <Text fontWeight='bold' fontSize='2rem' alignSelf='center' marginRight='3'>{`$${vino.precio}`}</Text>
      <Box display='flex' flexDirection='row' alignSelf='center' margin='2' >
        
        <ItemCount inicial ={1} stock ={vino.stock} />
        {goToCart ? <Link to ='/cart'>Finalizar</Link>: <Comprar textBoton={"Comrpar"} onAdd={onAdd}/>}
        
      </Box>
    </Box>
  )
}

export default ItemDetailConteiner
