import { Box, Heading } from "@chakra-ui/react"
import axios from "axios"
import { Navigate, Route, Routes } from "react-router-dom"
import Formulario from "../Form/Formulario"
import { useEffect, useState } from "react"
import ItemListContainer from "../ItemListCointainer/ItemListContainer"
import ItemDetailConteiner from "../ItemDetailContainer/ItemDetailConteiner"
//import Confirm18 from "../Confirm+18/Confirm18"

const Rutas = () => {
  const [vinos, setVinos] = useState([])
  const vinosJson = () => {
    axios
      .get('/vinos.json') // hace peticion a api o json de datos
      .then((res) => setVinos(res.data)) // obtiene respuesta y la muestra 
      .catch((err) => console.log(err)) // si hay un error en peticion arroja por consola el error
  }
  useEffect(() => { //Hay que importar el useEffect para que funcione
    vinosJson();
  }, []) // el UseEffect [] --> Para se ejecute cuando se monta el sitio. [prop1] --> En montaje y para cada cambio de la prop que se le de a State [prop1,prop2] --> Cuando cambia alguna de las 2 prop cambia el State
  // en las props de useEffect tienen que ser states
  //variable que guarda petision a datos JSON x axios

  return (
    <>
      <Routes>
        <Route path='/' element={
          <Heading className="home" display='flex' flexDirection='row' justifyContent='center' alignItems='center' height='100vh' fontSize='5rem' fontFamily={'Unbounded'}>
            <p className='bienvenidos' >Bienvenidos a Wayna Vinos</p>
          {/* <Confirm18/> */}
          </Heading>
        } />

        <Route path='/todos-los-vinos' element={
          <Box>
            <Heading fontFamily='Ubuntu' fontStyle='italic' fontSize='2.3rem' padding='30px' >Todos nuestros vinos</Heading>
            <Box display='flex' flexDirection='row' flexWrap='wrap' justifyContent='center'>
              {vinos.map(vino => { // se hace .map al State,en este caso "vinos"
                return (
                  <ItemListContainer key={vino.id} vino={vino} />) // componetizamos la card y le pasamos prop para poder pasarle el mapeo. la porp es el nombre que pasamos entre ({}) en el componente
              })}
            </Box>
          </Box>} />
        <Route path='/todos-los-vinos/:name' element={<ItemDetailConteiner />} />


        <Route path='/tintos' element={
          <Box>
            <Heading fontFamily='Ubuntu' fontStyle='italic' fontSize='2.3rem' padding='30px' >Nuestros tintos</Heading>
            <Box display='flex' flexDirection='row' flexWrap='wrap' justifyContent='center'>
              {vinos.map(vino => {
                if (vino.categoria === "tinto")
                  return (
                    <ItemListContainer key={vino.id} vino={vino} />)
              })}
            </Box>
          </Box>
        } />
        <Route path='/tintos/:name' element={<ItemDetailConteiner />} />

        <Route path='/blancos' element={
          <Box>
            <Heading fontFamily='Ubuntu' fontStyle='italic' fontSize='2.3rem' padding='30px' >Nuestros blancos</Heading>
            <Box display='flex' flexDirection='row' flexWrap='wrap' justifyContent='center'>
              {vinos.map(vino => {
                if (vino.categoria === "blanco")
                  return (
                    <ItemListContainer key={vino.id} vino={vino} />)
              })}
            </Box>
          </Box>
        } />
        <Route path='/blancos/:name' element={<ItemDetailConteiner />} />

        <Route path='/rosados' element={
          <Box>
            <Heading fontFamily='Ubuntu' fontStyle='italic' fontSize='2.3rem' padding='30px' >Nuestros rosados</Heading>
            <Box display='flex' flexDirection='row' flexWrap='wrap' justifyContent='center'>
              {vinos.map(vino => {
                if (vino.categoria === "rosado")
                  return (
                    <ItemListContainer key={vino.id} vino={vino} />)
              })}
            </Box>
          </Box>
        } />
        <Route path='/rosados/:name' element={<ItemDetailConteiner />} />

        <Route path='/champagne' element={
          <Box>
            <Heading fontFamily='Ubuntu' fontStyle='italic' fontSize='2.3rem' padding='30px' >Nuestros champagnes</Heading>
            <Box display='flex' flexDirection='row' flexWrap='wrap' justifyContent='center'>
              {vinos.map(vino => {
                if (vino.categoria === "champagne")
                  return (
                    <ItemListContainer key={vino.id} vino={vino} />)
              })}
            </Box>
          </Box>
        } />
        <Route path='/champagne/:name' element={<ItemDetailConteiner />} />

        <Route path='/contacto' element={
          <Formulario />}
        />

        <Route path='/carrito' element={
          <Heading display='flex' justifyContent='center' alignItems='center' height='80vh'>NO TIENE PRODUCTOS EN EL CARRITO</Heading>
        } />

        <Route path='/terminar' element={<Heading>Compra finalizada</Heading>} />


        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  )
}

export default Rutas
