import styles from './Header.module.css';
import logo from './logo.png'
import onne from './onne.png'
import seta from './arrow-drop-right-line 2.svg'
import LinkHeader from '../LinkHeader';
import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <header className={styles.header}>
            <div className={styles.icons}>
                <img src={logo} alt='logo da onne'/>
                <Link to='/'><img src={onne} alt='ONNE' className={styles.onne}/></Link>
            </div>
            <div className={styles.links}>
                <LinkHeader path='/paraVoce'>Para Você<img src={seta} alt='seta' className={styles.seta} /></LinkHeader>
                <LinkHeader path='/paraEmpresas'>Para Empresas<img src={seta} alt='seta' className={styles.seta}/></LinkHeader>
                <LinkHeader path='/sobreNos'>Sobre Nós</LinkHeader>
                <LinkHeader path='/contato'>Contato</LinkHeader>
                <LinkHeader path='/login'>Entrar</LinkHeader>
                <LinkHeader path='/signup'>Registrar</LinkHeader>
            </div>
        </header>
    )
}