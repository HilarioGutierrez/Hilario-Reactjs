//import {  Box, Button, Card, Container, Heading, Text } from '@chakra-ui/react'
import { Box, Button, Card, Container, Heading, Text } from '@chakra-ui/react'
import { useState } from 'react'
import "../app.css"
import ButtonCount from './Botones/ButtonCount'

const ItemCount = () => {

    const [contador, setContador] = useState(0)

    return (

        <Box width={200} border='2px' display='flex' flexDirection='row' borderColor='#857c8d' justifyContent='space-around' margin='auto' borderRadius={20}>
            {/* <Text fontSize='10' fontFamily='sans-serif' margin={0} textAlign='center'>Cantidad</Text> */}
            <Box display='flex' flexDirection='row' margin={1} borderRadius={20} justifyContent='space-evenly' alignItems='center' boxShadow='md'>
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
            </Box>
            <Button
                fontSize='10'
                alignSelf='center'
                width={50}
                background='#68b684'
                textColor='#fffffc'
                _hover={{
                    background: '#fffffc',
                    textColor: '#68b684',
                    border: '2px',
                    borderColor: '#68b684',
                }}
                margin={2}
                onClick={() => { confirm(`Ha seleccionado ${contador} productos`) }}
            >Agregar</Button>
        </Box>

    )
}

export default ItemCount
