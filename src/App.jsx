import { Box } from '@chakra-ui/react'
import Footer from './components/Footer/Footer';
import './app.css';
import Navbar from './components/NavBar/Index';
import CartProvider from './Context/CartContext';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Index';
import Formulario from './components/Form/Formulario';
import ItemListContainer from './components/ItemListCointainer/ItemListContainer';
import ItemDetail from './components/ItemDetail/Index';
import ItemDetailConteiner from './components/ItemDetailContainer/Index';

function App() {

  return (
    <Box className="App">
      {/* Contexto de carrito */}
        <CartProvider>
          <Navbar />
          <Routes>
            {/* Ruta a la que te dirije cuando el browser esta en / */}
            <Route path='/' element={
              <Home title="Bienvenidos a Wayna vinos" />
            } />
            {/* Ruta a la que te dirije cuando el browser esta en /todos-los-vinos */}
            <Route path='/todos-los-vinos' element={<ItemListContainer />} />
            <Route path='/todos-los-vinos/:name' element={<ItemDetailConteiner />} />
            {/* Ruta a la que te dirije cuando el browser esta en /contacto */}
            <Route path='/contacto' element={
              <Formulario />}
            />
            {/* Cuando no se encuentra una ruta, el browser te direje a / */}
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </CartProvider>
      <Footer />
    </Box>
  )
}

export default App
