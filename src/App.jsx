import { Box } from '@chakra-ui/react'
import Footer from './components/Footer/Footer';
import './app.css';
import Index from './components/Rutas/Index';
import Navbar from './components/Navbar';

function App() {

  return (
    <Box className="App">
      <Navbar />
      <Index />
      <Footer />
    </Box>
  )
}

export default App
