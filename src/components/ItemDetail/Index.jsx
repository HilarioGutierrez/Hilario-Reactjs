import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { UseCartContext } from '../../Context/CartContext'
import ItemCount from '../ItemCount/Index'
import styles from './ItemDetail.module.css'

const ItemDetail = ({ data }) => {

  const [terminarCompra, setTerminarCompra] = useState(false)
  const { agregarProducto } = UseCartContext()

  
  const onAdd = (cantidad) => {
    
    setTerminarCompra(true);
    agregarProducto(data, cantidad)
    console.log(`Seleccionaste: ${cantidad} unidades`);
  }

  return (
    <Box display='flex' flexDirection='column'>
      <Heading alignSelf='center' margin='25px'>{data.nombre}</Heading>
      <Image className='imgDetail' alignSelf='center' src={`${data.img}`} width={60}></Image>
      <Text fontSize="0.9rem" alignSelf='center' color='#857c8d'>Disponibles: {data.stock}</Text>
      <Text width='auto' padding={5} alignSelf='center' fontStyle='italic'>{data.descripcion}</Text>
      <Text fontWeight='bold' fontSize='2rem' alignSelf='center' marginRight='3'>{`$${data.precio}`}</Text>
      <Box display='flex' flexDirection='row' alignSelf='center' margin='2' >
        {
          terminarCompra ?
            <Box>
              <Link to='/carrito' className={styles.linkDecoration}><Button className={styles.btnACarrito}>Ir a Carrito</Button></Link>
              <Link to='/todos-los-vinos' className={styles.linkDecoration}><Button className={styles.btnACarrito}>Seguir Comprando</Button></Link>
            </Box> :
            <ItemCount inicial={0} stock={data.stock} onAdd={onAdd} />
        }
      </Box>
    </Box>
  )

}

export default ItemDetail
