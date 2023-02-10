import { Box, Button, FormControl, Heading, Text } from '@chakra-ui/react'
import { UseCartContext } from '../../Context/CartContext'
import styles from './Checkout.module.css'
import ItemCheckout from './ItemCheckout'
const Checkout = () => {

  const { carrito, total } = UseCartContext()
  console.log(carrito)
  return (
    <Box display='flex' flexDirection='column'>
        <Heading margin={3} fontFamily='Ubuntu' fontStyle='italic'>Datos del comprador</Heading>
      <Box display='flex' flexDirection='row' justifyContent='center'>
        <FormControl display='flex' flexDirection='column' padding={50} width='700px'>
          <label className={styles.label}>Nombre</label>
          <input className={styles.input} type="text" required placeholder=' Escriba tu nombre' />
          <label className={styles.label}>Apellido</label>
          <input className={styles.input} type="text" required placeholder=' Escriba su apellido' />
          <label className={styles.label}>Email</label>
          <input className={styles.input} type="email" required placeholder=' mail@mail.com' />
          <label className={styles.label}>Confirme su Email</label>
          <input className={styles.input} type="email" required placeholder=' mail@mail.com' />
          <label className={styles.label}>Telefono</label>
          <input className={styles.input} type="tel" required placeholder=' Escriba tu nombre' />
        </FormControl>
        <Box height='auto' boxShadow='dark-lg' p='6' rounded='md' bg='white' border='4px' borderColor='#5f1e3b' borderRadius='10%'>
          <Heading margin={3} fontFamily='Ubuntu' fontSize='1.2rem'font fontStyle='italic' color='#5f1e3b'>Resumen de compra:</Heading>
          {carrito.map(item => (<ItemCheckout key={item.id} item={item} />))}
          <hr/>
          <Text margin={3} fontWeight={800} fontSize='1.1rem'  textAlign='end' fontFamily='Ubuntu' fontStyle='italic'>Total: ${total()}</Text>
        </Box>
      </Box>
      <Button margin={3} colorScheme='green' variant='solid'>Confirmar</Button>
    </Box>

  )
}

export default Checkout