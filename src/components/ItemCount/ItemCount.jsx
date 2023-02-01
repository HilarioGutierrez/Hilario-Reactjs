import { Box, Button, Heading } from '@chakra-ui/react'
import { useState } from 'react';
import "../../app.css"
import styles from '../ItemCount/itemCount.module.css'

const ItemCount = ({ inicial, stock, onAdd }) => {
    const [contador, setContador] = useState(inicial)

    const suma = () => {
        setContador(contador + 1)
    }

    const resta = () => {
        setContador(contador - 1)
    }

    return (
        <Box border='2px' display='flex' flexDirection='row' borderColor='#857c8d' justifyContent='space-around' margin='auto' borderRadius={20}  alignItems='center' >
            <Box display='flex' flexDirection='row' margin={1} borderRadius={20} justifyContent='space-evenly' alignItems='center' >
                <button  className={styles.btnResta} disabled={contador <= 1} onClick={resta}>-</button>
                <p className={styles.contador}>{contador}</p>
                <button className={styles.btnSuma} disabled={contador >= stock} onClick={suma}>+</button>
            </Box>
        </Box>
    )
}

export default ItemCount
