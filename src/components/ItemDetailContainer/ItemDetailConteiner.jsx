import { Box, Container, Heading, Image, Switch, Text } from '@chakra-ui/react'
import React, {useEffect, useState } from 'react'
import { createContext } from 'react';
import { useParams } from 'react-router-dom'
import data from '../../../public/vinos.json';
import Comprar from '../Botones/Comprar';
import ItemCount from '../ItemCount'
import './itemdetail.css'

const ItemDetailConteiner = () => {
  const { name } = useParams()
  const vino = data.find((vino) => vino.nombre === name)
  useEffect(() => {
    vino
  }, [])

  const ThemeContext = createContext(null)
  const [theme, setTheme] = useState("light")
  const nameClass = "panel-" + theme
  return (
    <ThemeContext.Provider value={theme}>
      <Box className={nameClass} display='flex' flexDirection='column'>
      <input type='checkbox'
      checked={theme==="dark"}
      onChange={(e) =>setTheme (e.target.checked ? "dark" : "light" )}
      />
      <label>Dark Mode</label>
        <Heading alignSelf='center'>{vino.nombre}</Heading>
        <Image className='imgDetail' alignSelf='center' src={`${vino.img}`} width={60}></Image>
        <Text width={500} alignSelf='center'>{vino.descripcion}</Text>
        <Text fontWeight='bold' fontSize='2rem' marginRight='3'>{`$${vino.precio}`}</Text>
        <Box display='flex' flexDirection='column' margin='2' >
          <ItemCount />
          <Comprar textBoton={"Comprar"} />
        </Box>
      </Box>
    </ThemeContext.Provider>
  )
}

export default ItemDetailConteiner
