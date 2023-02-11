import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './home.module.css'

const Home = () => {
    return (
        <Box display='flex' flexDirection='row' flexWrap='wrap' w={{sm:'320px',md:'768px',lg:'960px',xl:'100%' }} >

            <Box justifyContent='space-around' className="title" height='60vh' width='100vw'>
                <Heading display="flex" flexWrap='wrap' flexDirection='column' fontSize='5rem' className="title">
                    <span className="title-word title-word-1">Bienvenidos</span>
                    <span className="title-word title-word-2">a</span>
                    <span className="title-word title-word-3">WAYNA</span>
                    <span className="title-word title-word-4">Vinos</span>
                </Heading>
                <Box display='flex' flexDirection='row' flexWrap='wrap' alignItems='center'>
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