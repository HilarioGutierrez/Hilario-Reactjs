import { Button, Box } from "@chakra-ui/react"
import Swal from "sweetalert2"
import ItemDetailConteiner from "../ItemDetailContainer/ItemDetailConteiner"

const Comprar = ({ vino, textBoton }) => {
    let carrito = []

    function agregarACarrito() {

        {
            carrito.push(vino.nombre)
            carrito.push(vino.bodega)
            carrito.push(vino.img)
            carrito.push(vino.precio)
        }

    }

    function agregarACarritoAlert() {
        Swal.fire({
            icon: "success",
            iconColor: '#5f1e3b',
            title: "Agregado correctamente",
            text: `Ha agregado al carrito ${vino.nombre}`,
            showConfirmButton: false,
            timer: 1800
        })
    }

    return (
        <>
            <Box display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
                <Button marginBottom={8} bgColor='#68b684' margin='5' textColor='#fffffc' _hover={{ bg: '#5f1e3b' }} onClick={() => {
                {<ItemDetailConteiner/>}
                }}>{textBoton}</Button>
            </Box>
        </>
    )
}

export default Comprar
