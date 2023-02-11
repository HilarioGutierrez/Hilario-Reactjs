import { Box, Button, Heading, Text } from '@chakra-ui/react'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { UseCartContext } from '../../Context/CartContext'
import Loading from '../Loading/Loading'
import styles from './checkout.module.css'
import ItemCheckout from './ItemCheckout'
const Checkout = () => {

  //llama a la base de datos
  const db = getFirestore();
  //en este caso crea una coleccion llamada orders
  const orderCollection = collection(db, 'orders');

  const { carrito, total } = UseCartContext()

  //States para guardar los value de los inputs
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [email, setEmail] = useState('')
  const [confirmEmail, setConfirmEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [loading, setLoading] = useState(true)

  const order = {
    buyer: {
      nombre: nombre,
      apellido: apellido,
      email: email,
      telefono: telefono,
    },
    items: carrito.map(item => ({ id: item.id, nombre: item.nombre, precio: item.precio, cantidad: item.cantidad })),
    total: total()
  }

  //funcion que guarda los datos del usuario y los items del carrito en la base de datos
  const handleOrder = async () => {
    //agrega los datos de la variable order a la coleccion orders
    await addDoc(orderCollection, order)
      .then(({ id }) =>
        Swal.fire({
          icon: 'success',
          title: 'Compra realizada con exito!',
          text: `Su numero de orden es: ${id}`,
          confirmButtonText: 'Aceptar',
        })
      );
    setLoading(false);
  }
  //condicional para mostrar loading mientras se obtienen los datos de firebase
  if (loading) {
    return (
      <Box display='flex' justifyContent='center' marginTop='100' width='300'>
        <Loading />
      </Box>
    )
  }

  return (
    <Box display='flex' flexDirection='column'>
      <Heading margin={3} fontFamily='Ubuntu' fontStyle='italic'>Datos del comprador</Heading>
      <Box display='flex' flexDirection='row' justifyContent='center'>
        <form className={styles.form} onSubmit={(e) => {
          e.preventDefault();
          handleOrder();
        }}>
          <label className={styles.label}>Nombre</label>
          <input className={styles.input} type="text" name='nombre' required placeholder=' Escriba su nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} />
          <label className={styles.label}>Apellido</label>
          <input className={styles.input} type="text" name='apellido' required placeholder=' Escriba su apellido' value={apellido} onChange={(e) => setApellido(e.target.value)} />
          <label className={styles.label}>Email</label>
          <input className={styles.input} type="email" name='email' required placeholder=' mail@mail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
          <label className={styles.label}>Confirme su Email</label>
          <input className={styles.input} type="email" name='confirmEmail' required placeholder=' mail@mail.com' value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} />
          <label className={styles.label}>Telefono</label>
          <input className={styles.input} type="tel" required placeholder=' 11 2222 3333' value={telefono} onChange={(e) => setTelefono(e.target.value)} />
          <Button margin={1} colorScheme='green' type='submit' variant='solid'>Confirmar</Button>
        </form>
        <Box margin={10} boxShadow='dark-lg' p='6' rounded='md' bg='white' border='4px' borderColor='#5f1e3b' borderRadius='10%'>
          <Heading margin={3} fontFamily='Ubuntu' fontSize='1.2rem' fontStyle='italic' color='#5f1e3b'>Resumen de compra:</Heading>
          {carrito.map(item => (<ItemCheckout key={item.id} item={item} />))}
          <hr />
          <Text margin={3} fontWeight={800} fontSize='1.1rem' textAlign='end' fontFamily='Ubuntu' fontStyle='italic'>Total: ${total()}</Text>
        </Box>
      </Box>
    </Box>
  )
}

export default Checkout