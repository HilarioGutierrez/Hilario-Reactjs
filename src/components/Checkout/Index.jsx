import { Box, Button, Heading, Text } from '@chakra-ui/react'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { UseCartContext } from '../../Context/CartContext'
import styles from './checkout.module.css'
import ItemCheckout from './ItemCheckout'
import { useToast } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Checkout = () => {
  const toast = useToast()
  //llama a la base de datos
  const db = getFirestore();
  //en este caso crea una coleccion llamada orders
  const orderCollection = collection(db, 'orders');

  const { carrito, total, setCarrito, vaciarCarrito } = UseCartContext()

  //States para guardar los value de los inputs
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [email, setEmail] = useState('')
  const [confirmEmail, setConfirmEmail] = useState('')
  const [telefono, setTelefono] = useState('')

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
        validateEmail(id),
      )
  }


  const validateEmail = (id) => {
    if (email !== confirmEmail) {
      toast({
        title: 'Los emails no coinciden',
        description: 'Por favor, verifique que los emails ingresados sean iguales',
        status: 'warning',
        duration: 2800,
        isClosable: true,
        colorScheme: 'red',
        position: 'top',
        color: 'white',
      })
    } else {
      Swal.fire({
        icon: 'success',
        iconColor: '68b684',
        titleText: 'Gracias por su compra!',
        text: `Su numero de orden es: ${id}`,
        confirmButtonColor: '#5f1e3b',
        confirmButtonText: 'Aceptar',
        background: '#f5f5f5',
      })
      setNombre('')
      setApellido('')
      setEmail('')
      setConfirmEmail('')
      setTelefono('')
      setCarrito([])
    }
  }

  return (
    <Box display='flex' flexDirection='column'>
      <Heading margin={3} fontFamily='Ubuntu' fontStyle='italic'>Datos del comprador</Heading>
      <Box display='flex' flexDirection={{ base: 'column', lg: 'row' }} justifyContent='center'>
        <form className={styles.form} onSubmit={(e) => {
          e.preventDefault();
          handleOrder()
          toast({
            title: 'Gracias por su compra!',
            description: 'Su orden esta siendo procesada',
            status: 'success',
            duration: 1500,
            position: 'bottom',
          })
          setTimeout(() => {
            location.assign("https://hilariogutierrez.github.io/Hilario-Reactjs/")
            window.location.reload()
          }, 3000)
        }}>
          <label className={styles.label}>Nombre<span className={styles.requerido}>*</span></label>
          <input className={styles.input} type="text" name='nombre' required placeholder=' Escriba su nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} />
          <label className={styles.label}>Apellido<span className={styles.requerido}>*</span></label>
          <input className={styles.input} type="text" name='apellido' required placeholder=' Escriba su apellido' value={apellido} onChange={(e) => setApellido(e.target.value)} />
          <label className={styles.label}>Email<span className={styles.requerido}>*</span></label>
          <input className={styles.input} type="email" name='email' required placeholder=' mail@mail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
          <label className={styles.label}>Confirme su Email<span className={styles.requerido}>*</span></label>
          <input className={styles.input} type="email" name='confirmEmail' required placeholder=' mail@mail.com' value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} />
          <label className={styles.label}>Telefono<span className={styles.requerido}>*</span></label>
          <input className={styles.input} type="tel" required placeholder=' 11 2222 3333' value={telefono} onChange={(e) => setTelefono(e.target.value)} />
          <small className={styles.small}>* Campo requerido de manera obligatoria</small>
          <Button margin={3} w={{ base: '80px', md: '100px', lg: '400px' }} colorScheme='green' type='submit' variant='solid'>Confirmar</Button>
        </form>
        <Box display='flex' flexDirection='column' margin={10} boxShadow='dark-lg' p='6' rounded='md' bg='white' border='4px' borderColor='#5f1e3b' borderRadius='10%'>
          <Heading margin={3} fontFamily='Ubuntu' fontSize='1.2rem' fontStyle='italic' color='#5f1e3b'>Resumen de compra:</Heading>
          {carrito.map(item => (<ItemCheckout key={item.id} item={item} />))}
          <hr />
          <Text margin={3} fontWeight={800} fontSize='1.1rem' textAlign='end' fontFamily='Ubuntu' fontStyle='italic'>Total: ${total()}</Text>
          <Link to='/' className={styles.link} color='black'>
            <Button alignSelf='center' w={{ base: '80px', md: '100px', lg: '470px' }} colorScheme='red' variant='solid' onClick={vaciarCarrito}>Vaciar</Button>
          </Link>
          <Text fontSize='0.8rem' padding={2} fontStyle='italic'>*Si oprime 'Vaciar' se vaciará el carrito y sera redirigido al inicio</Text>
        </Box>
      </Box>
    </Box>
  )
}

export default Checkout