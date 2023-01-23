import { Box } from "@chakra-ui/react"
import styles from "../Footer/footer.module.css"
const Footer = () => {
    return (
        <Box className={styles.footer} textColor='#fffffc' display='flex' alignItems='center' justifyContent='center'>
            <i className="bi bi-c-circle me-3"></i> Hilario Gutierrez
        </Box>
    )
}

export default Footer
