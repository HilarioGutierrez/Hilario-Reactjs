//import {  Box, Button, Card, Container, Heading, Text } from '@chakra-ui/react'
import { Box, Heading } from '@chakra-ui/react'
import { useContext, useState } from 'react'
import "../../app.css"
import ButtonCount from '../Botones/ButtonCount'
import Comprar from '../Botones/Comprar';

const ItemCount = () => {

    const [contador, setContador] = useState(1)

    return (

        <Box border='2px' display='flex' flexDirection='row' borderColor='#857c8d' justifyContent='space-around' margin='auto' borderRadius={20}>
            <Box display='flex' flexDirection='row' margin={1} borderRadius={20} justifyContent='space-evenly' alignItems='baseline' >
                <ButtonCount
                    texto={'-'}
                    setContador={setContador}
                    contador={contador}
                />
                <Heading fontSize='18' fontWeight='bold'>{contador}</Heading>
                <ButtonCount
                    texto={'+'}
                    setContador={setContador}
                    contador={contador}
                />
                <Comprar textBoton={"Agregar a carrito"}/>
            </Box>
        </Box>

    )
}

export default ItemCount
