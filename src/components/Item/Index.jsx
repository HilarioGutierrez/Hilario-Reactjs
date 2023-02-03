import { Box, Container, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Comprar from '../Botones/Comprar'
import styles from './Item.module.css'

const Item = ({ productos }) => {
  return (
    <Box marginBottom='20'>

      {/* --->Tarjeta de cada vino<--- */}
      <Box width={350} display='flex' flexDirection='row' flexWrap='wrap' margin='3' >
        <Container width={300} height={550} border='2px' borderColor='green' borderRadius={50} display='flex' justifyContent='space-between' flexDirection='column' boxShadow='2xl'>
          <Link to={`${productos.nombre}`} className={styles.linkDecoration} >
            <Heading fontSize='1.3rem' marginTop='20px' className={styles.nombreClick} textAlign='center'>{productos.nombre}</Heading>
            <Image src={productos.img} alt={`Botella de vino ${productos.nombre}`} alignSelf='center' width={100} />
          </Link>
          <Box display='flex' flexDirection='column' marginLeft='5'>
            <Text fontSize="0.7rem" color='#857c8d'>Disponibles: {productos.stock}</Text>
            <Heading fontSize='1rem' fontWeight='1rem' alignItems='center'><small>Bodega:</small> {productos.bodega}</Heading>
            <Heading fontSize='0.8rem' fontWeight='0.8rem'>{productos.varietal}</Heading>
            <Heading fontSize='0.7rem' fontWeight='0.7rem'>{productos.ano}</Heading>
            <Text fontWeight='bold' alignSelf='end' fontSize='1.2rem'>${productos.precio}</Text>
          </Box>
          <Comprar vino={productos} textBoton='Agregar a carrito' />
        </Container>
      </Box>
    </Box>
  )
}

export default Item
