import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import styles from './Home.module.css'
import Footer from '../../components/Footer'

export default function PaginaBase() {
    return(
        <>
            <Header />
            <Outlet />
            <Footer />
        </>

        
    )
}