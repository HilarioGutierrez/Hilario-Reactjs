import { Button } from "@chakra-ui/react"

const Comprar = ({ vino, textBoton }) => {

    return (
        <Button marginBottom={8} bgColor='#68b684' margin='5' textColor='#fffffc' _hover={{ bg: '#5f1e3b' }} onClick={() => {
            alert(`Ha seleccionado ${vino.nombre} de bodega ${vino.bodega}`);
        }
        }>{textBoton}</Button>
    )
}

export default Comprar
