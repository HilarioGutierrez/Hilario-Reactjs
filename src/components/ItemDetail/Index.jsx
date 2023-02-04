import { Box, Heading, Image, Text } from '@chakra-ui/react'
import ItemCount from '../ItemCount/Index'

const  ItemDetail = ({ data }) => {

  // const [goToCart, setGoToCart] = useState(false)
  // const { addProduct } = UseCartContext()


  // const onAdd = (quantity) => {
  //   setGoToCart(true);
  //   addProduct(data, quantity)
  //   // console.log(`Comrpaste: ${quantity} unidades`);
  // }

  return (
    <Box display='flex' flexDirection='column'>
      <Heading alignSelf='center' margin='25px'>{data.nombre}</Heading>
      <Image className='imgDetail' alignSelf='center' src={`${data.img}`} width={60}></Image>
      <Text fontSize="0.9rem" alignSelf='center' color='#857c8d'>Disponibles: {data.stock}</Text>
      <Text width={500} alignSelf='center' fontStyle='italic'>{data.descripcion}</Text>
      <Text fontWeight='bold' fontSize='2rem' alignSelf='center' marginRight='3'>{`$${data.precio}`}</Text>
      <Box display='flex' flexDirection='row' alignSelf='center' margin='2' >
        <ItemCount inicial={1} stock={data.stock} onAdd={''} />
        {/* {
            goToCart ? <Link to='/carrito'>Ver Carrito</Link> : 
  
          } */}

      </Box>
    </Box>
  ) 
  
}

export default ItemDetail
