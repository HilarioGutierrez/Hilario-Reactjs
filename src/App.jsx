import { Box } from '@chakra-ui/react'
import Footer from './components/Footer/Footer';
import './app.css';
import Navbar from './components/NavBar/Index';
import CartProvider from './Context/CartContext';
import Rutas from './components/Rutas/Index';
function App() {

  return (
    <Box className="App">
      <CartProvider>
        <Navbar />
        <Rutas />
      </CartProvider>
      <Footer />
    </Box>
  )
}

export default App
