import { Button, Box } from "@chakra-ui/react"

const Comprar = ({ textBoton }) => {
    
    return (
        <>
            <Box display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
                <Button marginBottom={8} bgColor='#68b684' margin='5' textColor='#fffffc' _hover={{ bg: '#5f1e3b' }}>{textBoton}</Button>

            </Box>
        </>
    )
}

export default Comprar
