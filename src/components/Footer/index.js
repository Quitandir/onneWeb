import styles from './Footer.module.css'
import logo from '../Header/logo.png'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer>
            <div className={styles.copyright}>
                <img src={logo} alt='logo' />
                <p className={styles.texto}>Copyright ©2023 kings.services.com</p>
            </div>
            <div className={styles.links}>
                <Link to='/contato' className={styles.link}>Contato</Link>
                <Link to='/tds' className={styles.link}>Termo de Serviço</Link>
                <Link to='/faq' className={styles.link}>FAQ</Link>
                <Link to='/ajuda' className={styles.link}>Ajuda</Link>
            </div>
        </footer>
    )
}