import { Box, Button } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import "../../app.css"
import styles from '../ItemCount/itemCount.module.css'

const ItemCount = ({ inicial, stock, onAdd }) => {
    const [contador, setContador] = useState(parseInt(inicial))
    //funcion para sumar al contador
    const suma = () => { setContador(contador + 1) }
    //funcion para restar al contador
    const resta = () => { setContador(contador - 1) }

    useEffect(() => {
        setContador(parseInt(inicial))
    }, [inicial])


    return (
        <Box border='2px' display='flex' flexDirection='row' borderColor='#857c8d' justifyContent='space-around' margin='auto' borderRadius={10} padding={1} alignItems='center' >
            <Box display='flex' flexDirection='row' margin={1} borderRadius={20} justifyContent='space-evenly' alignItems='center' >
                <button className={styles.btnResta} disabled={contador <= 1} onClick={resta}>-</button>
                <p className={styles.contador}>{contador}</p>
                <button className={styles.btnSuma} disabled={contador >= stock} onClick={suma}>+</button>
            </Box>
            <Box display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
                <Button marginBottom={8} bgColor='#68b684' margin='2' textColor='#fffffc' disabled={stock <= 0 || contador > stock || contador <= 0} _hover={{ bg: '#5f1e3b' }} onClick={() => onAdd(contador)}>Comprar</Button>
                <Button marginBottom={2} disabled={contador <= 0} bgColor='#857c8d' margin='2' textColor='#fffffc' _hover={{ bg: '#5f1e3b' }} onClick={() => setContador(1)}>Borrar</Button>
            </Box>
        </Box>
    )
}


export default ItemCount
