import { Heading } from '@chakra-ui/react'
import React from 'react'

const Home = ({ title }) => {
    return (
        <>
            <Heading className="home" display='flex' flexDirection='row' justifyContent='center' alignItems='center' height='100vh' fontSize='5rem' fontFamily={'Unbounded'}>
                <p className='bienvenidos' >{title}</p>
                {/* <Confirm18/> */}
            </Heading></>
    )
}

export default Home