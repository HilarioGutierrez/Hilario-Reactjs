import { Text } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"

const ButtonCount = ({ texto, setContador, contador }) => {
    const [stock, setStock] = useState([])
    const pedidoAxios = () => {
        axios
            .get('/vinos.json')
            .then((res) => setStock(res.data))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        pedidoAxios()
    }, [])


    function disponible() {
        stock.map(cantidad => {
            if (texto === "+") {
                setContador(contador + 1)
            }
            contador >= cantidad.stock && setContador(cantidad.stock)
        })
    }

    function menosDeUno() {
        if (texto === "-") {
            setContador(contador - 1)
        }
        contador <= 1 && setContador(1)
    }

    return (
        <Text
            fontSize='13' margin='2' display='flex' flexDirection='row' justifyContent='center' borderRadius={'xl'} width={8} cursor='pointer' border='1px' borderColor='#5f1e3b'

            onClick={() => texto === '+' ? disponible() : menosDeUno()}
        >
            {texto}
        </Text>

    )
}

export default ButtonCount
