import { Box, Button, FormControl, Heading } from '@chakra-ui/react'
import { Form } from 'react-router-dom'
import styles from './Checkout.module.css'
const Checkout = () => {
  return (
    <Box>
      <Heading margin={3} fontFamily='Ubuntu' fontStyle='italic'>Datos del comprador</Heading>
      <FormControl display='flex' flexDirection='column' padding={50}>
        <label className={styles.label}>Nombre</label>
        <input className={styles.input} type="text" required placeholder=' Escriba tu nombre' />
        <label className={styles.label}>Apellido</label>
        <input className={styles.input} type="text" required placeholder=' Escriba su apellido' />
        <label className={styles.label}>Email</label>
        <input className={styles.input} type="email" required placeholder=' mail@mail.com'  />
        <label className={styles.label}>Confirme su Email</label>
        <input className={styles.input} type="email" required placeholder=' mail@mail.com' />
      <Button margin={3} colorScheme='green' variant='solid'>Confirmar</Button>
      </FormControl>

    </Box>
  )
}

export default Checkout