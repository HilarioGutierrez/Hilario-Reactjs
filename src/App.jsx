import { Box } from '@chakra-ui/react'
import Footer from './components/Footer/Footer';
import './app.css';
import Rutas from './components/Rutas/Index';
import Navbar from './components/NavBar/Navbar';
// import Confirm18 from './components/Confirm+18/Confirm18';

function App() {

  return (
    <Box className="App">
      {/* <Confirm18/> */}
      <Navbar />
      <Rutas />
      <Footer />
    </Box>
  )
}

export default App
