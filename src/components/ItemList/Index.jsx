import { Box } from '@chakra-ui/react'
import React from 'react'
import Item from '../Item/Index'

const ItemList = ({ data = [] }) => {
  return (
    <>
      <Box display='flex' flexDirection='row' flexWrap='wrap' justifyContent='center'>
        {
          data.map(vino => <Item key={vino.id} productos={vino} />
          )
        }
      </Box>
    </>
  )
}

export default ItemList
