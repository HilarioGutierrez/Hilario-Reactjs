import { Box } from '@chakra-ui/react'
import Footer from './components/Footer/Footer';
import './app.css';
import Navbar from './components/NavBar/Index';
import CartProvider from './Context/CartContext';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Index';
import Formulario from './components/Form/Formulario';
import DataProvider from './Context/DataContext';
import ItemList from './components/ItemList/Index';

function App() {

  return (
    <Box className="App">
      {/* Contexto de carrito */}
      <CartProvider>
        {/* Contexto de datos */}
        <DataProvider>
          <Navbar />
          <Routes>
            {/* Ruta a la que te dirije cuando el browser esta en / */}
            <Route path='/' element={
              <Home title="Bienvenidos a Wayna vinos" />
            } />
            {/* Ruta a la que te dirije cuando el browser esta en /todos-los-vinos */}
            <Route path='/todos-los-vinos' element={<ItemList />} />
            {/* Ruta a la que te dirije cuando el browser esta en /contacto */}
            <Route path='/contacto' element={
              <Formulario />}
            />
            {/* Cuando no se encuentra una ruta, el browser te direje a / */}
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </DataProvider>
        <Footer />
      </CartProvider>
    </Box>
  )
}

export default App
