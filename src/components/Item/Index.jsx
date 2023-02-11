import { Box, Button, Container, Heading, Image, Text, Toast } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Item.module.css'
import { UseCartContext } from '../../Context/CartContext'
import { useToast } from '@chakra-ui/react'

const Item = ({ productos }) => {

  const { agregarProducto } = UseCartContext()

  const toast = useToast()

  const onAdd = () => {
    agregarProducto(productos, 1)
    console.log(`Seleccionaste: ${1} unidades`);
    toast({
      title: 'Agregado al carrito!',
          description: `Has agregado ${1} unidades de ${productos.nombre} al carrito`,
          status: 'success',
          duration: 2500,
          position:'top-right',
          isClosable: true,
    })
    
  }
  return (
    <Box marginBottom='20'>

      {/* --->Tarjeta de cada vino<--- */}
      <Box width={350} display='flex' flexDirection='row' flexWrap='wrap' margin='3' >
        <Container width={300} height={550} border='2px' borderColor='green' borderRadius={50} display='flex' justifyContent='space-between' flexDirection='column' boxShadow='2xl'>
          <Link to={`${productos.id}`} className={styles.linkDecoration} >
            <Heading fontSize='1.3rem' marginTop='20px' className={styles.nombreClick} textAlign='center'>{productos.nombre}</Heading>
            <Image src={productos.img} alt={`Botella de vino ${productos.nombre}`} alignSelf='center' width={100} />
          </Link>
          <Box display='flex' flexDirection='column' marginLeft='3' marginBottom={4}>
            <Text fontSize="0.7rem" color='#857c8d'>Disponibles: {productos.stock}</Text>
            <Heading fontSize='1rem' fontWeight='1rem' alignItems='center'><small>Bodega:</small> {productos.bodega}</Heading>
            <Heading fontSize='0.8rem' fontWeight='0.8rem'>{productos.varietal}</Heading>
            <Heading fontSize='0.7rem' fontWeight='0.7rem'>{productos.ano}</Heading>
            <Text fontWeight='bold' alignSelf='end' fontSize='1.2rem' >${productos.precio}</Text>
          </Box>
          <Button colorScheme='green' alignSelf='center' marginBottom='20px' onClick={onAdd} Show Toast >Agregar al carrito</Button>
        </Container>
      </Box>
    </Box>
  )
}

export default Item
