import { Box, Heading } from "@chakra-ui/react"
import { Navigate, Route, Routes } from "react-router-dom"
import Formulario from "../Form/Formulario"
import ItemDetailConteiner from "../ItemDetailContainer/Index"
import ItemList from "../ItemList/Index"
import { useEffect, useState } from "react"
import Home from "../Home/Index"
import Item from "../Item/Index"
import Cart from "../Cart/Index"
import { db } from '../../../db/firebase-config'
import { collection, getDocs } from "firebase/firestore"
import Loading from "../Loading/Loading"
import Checkout from "../Checkout/Index"

const Rutas = () => {
  // state Loading
  const [loading, setLoading] = useState(true)
  //state que guarda datos de la coleccion de firebase
  const [data, setData] = useState([])
  //variable con coleccion de datos de firebase
  const dataCollection = collection(db, "vinos")
  //funcion que obtiene datos de firebase
  const getData = async () => {
    const querySnapshot = await getDocs(dataCollection);
    //en 'docs' del objeto obtenido por getDocs se encuentran los datos de la coleccion. Por eso se utiliza .docs
    const docs = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    //se actualiza el state con los datos obtenidos
    setData(docs)
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

//condicional para mostrar loading mientras se obtienen los datos de firebase
  if (loading) {
    return (
      <Box display='flex' justifyContent='center' marginTop='100' width='300'>
        <Loading />
      </Box>
    )
  }

  return (
    <>
      <Routes>
        <Route path='/' element={
          <Box>
            <Home />
          </Box>
        } />

        <Route path='/todos-los-vinos' element={
          <Box>
            <Heading fontFamily='Ubuntu' fontStyle='italic' fontSize='2.3rem' padding='30px' >Nuestros vinos</Heading>
            <ItemList data={data} />
          </Box>
        } />
        <Route path='/todos-los-vinos/:id' element={<ItemDetailConteiner />} />

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
        <Route path='/tintos/:id' element={<ItemDetailConteiner />} />

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
        <Route path='/blancos/:id' element={<ItemDetailConteiner />} />

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
        <Route path='/rosados/:id' element={<ItemDetailConteiner />} />

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
        <Route path='/champagne/:id' element={<ItemDetailConteiner />} />

        <Route path='/contacto' element={
          <Formulario />} />

        <Route path='/carrito' element={
          <Cart />} />

          <Route path='/checkout' element={<Checkout />} />

        <Route path='*' element={<Navigate to='/' />} />
      </Routes>

    </>
  )
}

export default Rutas
