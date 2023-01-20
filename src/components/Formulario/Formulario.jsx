import { Box, Heading } from "@chakra-ui/react"
import Comprar from "../Botones/Comprar"

const Formulario = () => {
  return (
    <Box display='flex' flexDirection='column' flexWrap='wrap' justifyContent='start' alignItems='center' height='75vh'>
            <Heading fontFamily='Ubuntu' fontStyle='italic' fontSize='2.3rem' padding='30px' >Contacto</Heading>
            <form className='Form'>
              <div className='divForm'>
                <label className='labelform'>
                  Nombre y Apellido:
                  <input className="input" required placeholder=" Lionel Messi" type="text" name="name" />
                </label>
              </div>
              <div className='divForm'>
                <label className='labelform'>
                  Mail:
                  <input className="input" placeholder=" world.champion@thegoat.com" required type="email" name="mail" />
                </label>
              </div>
              <div className='divForm'>
                <label className='labelform'>
                  Mensaje:
                  <textarea className="input" name="message" />
                </label>
              </div>
              
              <Comprar textBoton={'Enviar'}/>
              
            </form>
          </Box>
  )
}

export default Formulario