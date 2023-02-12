import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import styles from './itemCart.module.css';
import { UseCartContext } from '../../Context/CartContext';
import { BsFillCartXFill } from 'react-icons/bs';
const ItemCart = ({ item }) => {

  const { eliminarProducto , borrarStorage, vaciarCarrito } = UseCartContext();

  return (
    <>
    <Box display='flex' flexDirection='row' cursor='pointer' alignItems='baseline' justifyContent='end' onClick={vaciarCarrito}>
    <Text padding={3}>Vaciar Carrito</Text>
    <BsFillCartXFill className={styles.vaciarCarrito} />
    </Box>
      <Box display='flex' flexDirection={{base:'column', lg:'row'}} alignItems='center' justifyContent='space-between' margin={5}>
        <Image className={styles.img} alt={item.nombre} src={item.img}></Image>
        <Box display='flex' flexDirection='column'>
        <Heading fontWeight='300' padding={5} textAlign='center' fontStyle='italic'>{item.nombre}</Heading>
        <Box display='flex' flexDirection='row'>
          <Text className={styles.texto}>Precio unitario: ${item.precio}</Text>
          <Text className={styles.texto}>Cantidad: {item.cantidad}</Text>
          <Text className={styles.texto}>Subtotal: ${item.cantidad * item.precio}</Text>
          </Box>
          </Box>
        <Button bg='#5f1e3b' textColor='#fffffc' _hover={{bg: '#fffffc', textColor: '#5f1e3b', border:'2px solid #5f1e3b'}} onClick={() => {eliminarProducto(item.id), borrarStorage(item.id) }}>Eliminar</Button>
        </Box>
    </>
  )
}

export default ItemCart
