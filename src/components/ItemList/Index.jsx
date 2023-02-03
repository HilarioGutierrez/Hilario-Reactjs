import { Box } from '@chakra-ui/react'
import { useContext } from 'react'
import { dataContext } from '../../Context/DataContext'
import Item from '../Item/Index'

const ItemList = () => {
    const {data} = useContext(dataContext)
    console.log(data)

    return (

        <Box display='flex' flexDirection='row' flexWrap='wrap' justifyContent='center'>
            {
                data.map(vino => <Item key={vino.id} productos={vino} />
                )
            }
        </Box>

    )
}

export default ItemList