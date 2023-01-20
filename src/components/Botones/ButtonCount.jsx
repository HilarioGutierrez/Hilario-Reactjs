import { Text } from "@chakra-ui/react"

const ButtonCount = ({ texto, setContador, contador }) => {
    return (
        <Text
            fontSize='13' margin='2' display='flex' flexDirection='row' justifyContent='center' borderRadius={'xl'} width={8} textAlign='center' cursor='pointer' border='1px' borderColor='#5f1e3b'

            onClick={() => texto === '+' ? setContador(contador + 1) : setContador(contador - 1)}
        >
            {texto}
        </Text>

    )
}

export default ButtonCount
