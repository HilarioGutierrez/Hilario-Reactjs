import { Box, Container } from "@chakra-ui/react"
import styles from "../Footer/footer.module.css"
const Footer = () => {
    return (

        <Box className={styles.footer} textColor='#fffffc' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
            <Container display='flex' flexDir='row' justifyContent='center'>
                <i className="bi bi-c-circle me-2"></i><h6> 2023 Hilario Gutierrez</h6>
            </Container>
        </Box>
    )
}

export default Footer
