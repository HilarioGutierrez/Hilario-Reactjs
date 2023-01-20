//import "src/app.css";

import { Box, Container, Heading, Image, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import Comprar from "../Botones/Comprar"
import styles from './Card.module.css'


const Card = ({ vino }) => {
  return (
    <Box marginBottom='20'>
      {/* --->Tarjeta de cada vino<--- */}
      <Box width={350} display='flex' flexDirection='row' flexWrap='wrap' margin='3' >
        <Container width={300} height={500} border='2px' borderColor='green' borderRadius={50} display='flex' justifyContent='space-between' flexDirection='column' boxShadow='2xl'>
          <Link to={`${vino.nombre}`} className={styles.linkDecoration} >
            <Heading fontSize='1.3rem' className={styles.nombreClick} textAlign='center' marginTop='2'>{vino.nombre}</Heading>
            <Image src={vino.img} alt={`Botella de vino ${vino.nombre}`} alignSelf='center' width={100} />
          </Link>
          <Box display='flex' flexDirection='column' marginLeft='5'>
            <Heading fontSize='1rem' fontWeight='1rem' alignItems='center'>{vino.bodega}</Heading>
            <Heading fontSize='0.8rem' fontWeight='0.8rem'>{vino.varietal}</Heading>
            <Heading fontSize='0.7rem' fontWeight='0.7rem'>{vino.ano}</Heading>
            <Text fontWeight='bold' alignSelf='end' fontSize='1.2rem'>${vino.precio}</Text>
          </Box>
          <Comprar vino={vino} textBoton='Agregar a Carrito' />
        </Container>
      </Box>
    </Box>

  )
}

export default Card
