import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import styles from './itemCart.module.css';
import { UseCartContext } from '../../Context/CartContext';

const ItemCart = ({ item }) => {

  const { eliminarProducto } = UseCartContext();

  return (
    <>
      <Box display='flex' flexDirection=' row' alignItems='center' justifyContent='space-between' margin={5}>
        <Image className={styles.img} alt={item.nombre} src={item.img}></Image>
        <Box display='flex' flexDirection='column'>
        <Heading fontWeight='300' fontStyle='italic'>{item.nombre}</Heading>
        <Box display='flex' flexDirection='row'>
          <Text className={styles.texto}>Precio unitario: ${item.precio}</Text>
          <Text className={styles.texto}>Cantidad: {item.cantidad}</Text>
          <Text className={styles.texto}>Subtotal: ${item.cantidad * item.precio}</Text>
          </Box>
          </Box>
        <Button bg='#5f1e3b' textColor='#fffffc' _hover={{bg: '#fffffc', textColor: '#5f1e3b', border:'2px solid #5f1e3b'}} onClick={() => eliminarProducto(item.id)}>Eliminar</Button>
        </Box>
    </>
  )
}

export default ItemCart
