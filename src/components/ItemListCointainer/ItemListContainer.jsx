//import "src/app.css";

import { Box, Container, Heading, Image, Text } from "@chakra-ui/react"
import { Link, Route } from "react-router-dom"
import Comprar from "../Botones/Comprar"
import ItemDetailConteiner from "../ItemDetailContainer/ItemDetailConteiner"
import styles from './ItemListContainer.module.css'


const ItemListContainer = ({ vino }) => {

  return (
    <Box marginBottom='20'>
      {/* --->Tarjeta de cada vino<--- */}
      <Box width={350} display='flex' flexDirection='row' flexWrap='wrap' margin='3' >
        <Container width={300} height={550} border='2px' borderColor='green' borderRadius={50} display='flex' justifyContent='space-between' flexDirection='column' boxShadow='2xl'>
          <Link to={`${vino.nombre}`} className={styles.linkDecoration} >
            <Heading fontSize='1.3rem' marginTop='20px' className={styles.nombreClick} textAlign='center'>{vino.nombre}</Heading>
            <Image src={vino.img} alt={`Botella de vino ${vino.nombre}`} alignSelf='center' width={100} />
          </Link>
          <Box display='flex' flexDirection='column' marginLeft='5'>
            <Text fontSize="0.7rem" color='#857c8d'>Disponibles: {vino.stock}</Text>
            <Heading fontSize='1rem' fontWeight='1rem' alignItems='center'><small>Bodega:</small> {vino.bodega}</Heading>
            <Heading fontSize='0.8rem' fontWeight='0.8rem'>{vino.varietal}</Heading>
            <Heading fontSize='0.7rem' fontWeight='0.7rem'>{vino.ano}</Heading>
            <Text fontWeight='bold' alignSelf='end' fontSize='1.2rem'>${vino.precio}</Text>
          </Box>
          <Comprar vino={vino} textBoton='Agregar a carrito' />
        </Container>
      </Box>
    </Box>

  )
}

export default ItemListContainer
