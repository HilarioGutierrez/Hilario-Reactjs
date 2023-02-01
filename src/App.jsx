import { Box } from '@chakra-ui/react'
import Footer from './components/Footer/Footer';
import './app.css';
import Rutas from './components/Rutas/Index';
import Navbar from './components/NavBar/Navbar';
import CartProvider from './Context/CartContext';


function App() {

  return (
    <Box className="App">
      <CartProvider>
        <Navbar />
        <Rutas />
      <Footer />
      </CartProvider>
    </Box>
  )
}

export default App
