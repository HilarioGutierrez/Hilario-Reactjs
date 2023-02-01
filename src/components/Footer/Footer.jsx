import { Box } from "@chakra-ui/react"
import styles from "../Footer/footer.module.css"
const Footer = () => {
    return (

        <Box className={styles.footer} textColor='#fffffc' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
            <Box display='flex' flexDir='row'>
                <i className="bi bi-c-circle me-3"></i> <h5>Hilario Gutierrez</h5>
            </Box>
            <hr />
            <strong>2023</strong>
        </Box>
    )
}

export default Footer
