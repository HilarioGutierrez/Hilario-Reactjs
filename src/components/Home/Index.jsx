import { Box, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './home.module.css'

const Home = () => {
    return (
        <Box display='flex' flexDirection='row' flexWrap='wrap' height='70vh' w={{ sm: '100%', md: '100%', lg: '100%', xl: '100%' }} >

            <Box justifyContent='space-around' flexWrap='wrap' className="title" w={
                {
                    sm: '30em',
                    md: '48em',
                    lg: '62em',
                    xl: '80em',
                    '2xl': '96em',
                }}>
                <Heading display="flex" flexWrap='wrap' flexDirection='column' fontSize={{ base: '2rem', md: '3.5rem', lg: '5rem' }} className="title">
                    <span className="title-word title-word-1">Bienvenidos</span>
                    <span className="title-word title-word-2">a</span>
                    <span className="title-word title-word-3">WAYNA</span>
                    <span className="title-word title-word-4">Vinos</span>
                </Heading>
                <Box display='flex' flexDirection={{ base: 'column', md: 'row' }}height='auto' justifyContent='center' flexWrap='wrap' alignItems='center'>
                    <Link to='/tintos'>
                        <Image src='https://res.cloudinary.com/dey3fcafu/image/upload/v1676081957/React%20JS/vino-tinto_nyd68k.jpg'  className={styles.categoriaTinto} />
                        
                    </Link>
                    <Link to='/blancos'>
                        <Image src='https://res.cloudinary.com/dey3fcafu/image/upload/v1676081956/React%20JS/vino-blanco_hzmyml.jpg' className={styles.categoriaBlanco}/>
                            
                    </Link>
                    <Link to='/rosados'>
                        <Image src='https://res.cloudinary.com/dey3fcafu/image/upload/v1676081960/React%20JS/vino-rosado_vj1dik.jpg' className={styles.categoriaRosado}/>
                    </Link>
                    <Link to='/champagne'>
                        <Image src='https://res.cloudinary.com/dey3fcafu/image/upload/v1676081957/React%20JS/champagne_bye1bh.jpg' className={styles.categoriaChampagne}/>
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}

export default Home