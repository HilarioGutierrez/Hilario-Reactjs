import { Box, Heading } from "@chakra-ui/react"
import {  Route, Routes } from "react-router-dom"
import Formulario from "../Form/Formulario"
import ItemListContainer from "../ItemListCointainer/ItemListContainer"
import ItemDetailConteiner from "../ItemDetailContainer/ItemDetailConteiner"
import ItemList from '../../ItemList/Index'

const Rutas = (data) => {
  
  return (
    <>
      <Routes>
        

        <Route path='/todos-los-vinos' element={
          <Box>
            <Heading fontFamily='Ubuntu' fontStyle='italic' fontSize='2.3rem' padding='30px' >Todos nuestros vinos</Heading>
              {<ItemList />}
          </Box>} />
        <Route path='/todos-los-vinos/:name' element={<ItemDetailConteiner objeto={data} />} />


        <Route path='/tintos' element={
          <Box>
            <Heading fontFamily='Ubuntu' fontStyle='italic' fontSize='2.3rem' padding='30px' >Nuestros tintos</Heading>
            <Box display='flex' flexDirection='row' flexWrap='wrap' justifyContent='center'>
              {data.map(vino => {
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
              {data.map(vino => {
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
              {data.map(vino => {
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
              {data.map(vino => {
                if (vino.categoria === "champagne")
                  return (
                    <ItemListContainer key={vino.id} vino={vino} />)
              })}
            </Box>
          </Box>
        } />
        <Route path='/champagne/:name' element={<ItemDetailConteiner />} />



        <Route path='/carrito' element={
          <Heading display='flex' justifyContent='center' alignItems='center' height='80vh'>NO TIENE PRODUCTOS EN EL CARRITO</Heading>
        } />

      </Routes>
    </>
  )
}

export default Rutas
