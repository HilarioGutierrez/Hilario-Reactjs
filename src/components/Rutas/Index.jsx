import { Box, Heading } from "@chakra-ui/react"
import { Navigate, Route, Routes } from "react-router-dom"
import Formulario from "../Form/Formulario"
import ItemDetailConteiner from "../ItemDetailContainer/Index"
import ItemList from "../ItemList/Index"
import { useEffect, useState } from "react"
import axios from "axios"
import Home from "../Home/Index"
import Item from "../Item/Index"

const Rutas = () => {
  const [data, setData] = useState([])
  const dataJson = () => {
    axios
      .get('/vinos.json') // hace peticion a api o json de datos
      .then((res) => setData(res.data)) // obtiene respuesta y la muestra 
      .catch((err) => console.log(err)) // si hay un error en peticion arroja por consola el error
  }

  useEffect(() => { //Hay que importar el useEffect para que funcione
    setTimeout(() => { dataJson() },)
  }, []) // el UseEffect [] --> Para se ejecute cuando se monta el sitio. [prop1] --> En montaje y para cada cambio de la prop que se le de a State [prop1,prop2] --> Cuando cambia alguna de las 2 prop cambia el State
  // en las props de useEffect tienen que ser states
  //variable que guarda petision a datos JSON x axios
  return (
    <>
      <Routes>
        <Route path='/' element={
          <Home title="Bienvenidos a Wayna vinos" />
        } />
        <Route path='/todos-los-vinos' element={<ItemList data={data}  />
} />
        <Route path='/todos-los-vinos/:name' element={<ItemDetailConteiner />} />

        <Route path='/tintos' element={
          <Box>
            <Heading fontFamily='Ubuntu' fontStyle='italic' fontSize='2.3rem' padding='30px' >Nuestros tintos</Heading>
            <Box display='flex' flexDirection='row' flexWrap='wrap' justifyContent='center'>
              {data.map(vino => {
                if (vino.categoria === "tinto")
                  return (
                    <Item key={vino.id} productos={vino} />)
              })}
            </Box>
          </Box>
        } />
        <Route path='/tintos/:name' element={<ItemDetailConteiner />} />

        <Route path='/blancos' element={
          <Box>
            <Heading fontFamily='Ubuntu' fontStyle='italic' fontSize='2.3rem' padding='30px' >Nuestros blancos</Heading>
            <Box display='flex' flexDirection='row' flexWrap='wrap' justifyContent='center'>
              {data.map(vino => {
                if (vino.categoria === "blanco")
                  return (
                    <Item key={vino.id} productos={vino} />)
              })}
            </Box>
          </Box>
        } />
        <Route path='/blancos/:name' element={<ItemDetailConteiner />} />

        <Route path='/rosados' element={
          <Box>
            <Heading fontFamily='Ubuntu' fontStyle='italic' fontSize='2.3rem' padding='30px' >Nuestros rosados</Heading>
            <Box display='flex' flexDirection='row' flexWrap='wrap' justifyContent='center'>
              {data.map(vino => {
                if (vino.categoria === "rosado")
                  return (
                    <Item key={vino.id} productos={vino} />)
              })}
            </Box>
          </Box>
        } />
        <Route path='/rosados/:name' element={<ItemDetailConteiner />} />

        <Route path='/champagne' element={
          <Box>
            <Heading fontFamily='Ubuntu' fontStyle='italic' fontSize='2.3rem' padding='30px' >Nuestros champagnes</Heading>
            <Box display='flex' flexDirection='row' flexWrap='wrap' justifyContent='center'>
              {data.map(vino => {
                if (vino.categoria === "champagne")
                  return (
                    <Item key={vino.id} productos={vino} />)
              })}
            </Box>
          </Box>
        } />
        <Route path='/champagne/:name' element={<ItemDetailConteiner />} />

        <Route path='/contacto' element={
          <Formulario />} />

        <Route path='/carrito' element={
          <Heading display='flex' justifyContent='center' alignItems='center' height='80vh'>NO TIENE PRODUCTOS EN EL CARRITO</Heading>} />

        <Route path='*' element={<Navigate to='/' />} />
      </Routes>

    </>
  )
}

export default Rutas
