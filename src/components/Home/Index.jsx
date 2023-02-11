import { Box, Heading } from '@chakra-ui/react'
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
                <Heading display="flex" flexWrap='wrap' flexDirection='column' fontSize={{base: '2rem', md: '3.5rem', lg: '5rem'}} className="title">
                    <span className="title-word title-word-1">Bienvenidos</span>
                    <span className="title-word title-word-2">a</span>
                    <span className="title-word title-word-3">WAYNA</span>
                    <span className="title-word title-word-4">Vinos</span>
                </Heading>
                <Box display='flex' flexDirection={{base:'column', md:'row'}} justifyContent='center' flexWrap='wrap' alignItems='center'>
                    <Link to='/tintos'>
                        <div className={styles.categoriaTinto}>
                        </div>
                    </Link>
                    <Link to='/blancos'>
                        <div className={styles.categoriaBlanco}>
                        </div>
                    </Link>
                    <Link to='/rosados'>
                        <div className={styles.categoriaRosado}>
                        </div>
                    </Link>
                    <Link to='/champagne'>
                        <div className={styles.categoriaChampagne}>
                        </div>
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}

export default Home