import { Box, Heading } from '@chakra-ui/react'
import Footer from './components/Footer/Footer';
import './app.css';
import Navbar from './components/NavBar/Index';
import CartProvider from './Context/CartContext';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Index';
import Formulario from './components/Form/Formulario';
import ItemListContainer from './components/ItemListCointainer/ItemListContainer';
import ItemDetailConteiner from './components/ItemDetailContainer/Index';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ItemList from './components/ItemList/Index';
import Rutas from './components/Rutas/Index';

function App() {
  const [data, setData] = useState([])
  const dataJson = () => {
    axios
      // obtiene el archivo json 
      .get('/vinos.json')
      // setea el estado con los datos del json
      .then((res) => setData(res.data))
      // en caso de error lo muestra en consola
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    setTimeout(() => { dataJson() }, 1000) // ejecuta la funcion dataJson despues de 1 segundo
  }, []) // se ejecuta una sola vez al cargar la pagina

  return (
    <Box className="App">
      {/* Contexto de carrito */}
      <CartProvider>
        <Navbar />
        <Rutas />
      </CartProvider>
      <Footer />
    </Box>
  )
}

export default App
