import EntrarEmContato from '../../components/EntrarEmContato'
import Titulo from '../../components/Titulo'
import styles from './Home.module.css'
import imagemHomeTop from '../../assets/imagesHome/home-top.png'
import imagemHomeBottom from '../../assets/imagesHome/home-bottom.png'
import Botao from '../../components/Botao'


export default function Home() {
    return(
        <section className={styles.home}>
            <Titulo alinhamento='centro'>Gerenciamos de forma prática e segura os dados dos seus clientes.</Titulo>
            <EntrarEmContato />

            <img src={imagemHomeTop} alt='celular bloqueado' className={styles.imageTopHome} />

            <div className={styles.bottom__container}>
                <div className={styles.container__texto}>

                    <Titulo alinhamento='esquerda'>Nossa plataforma ajuda sua empresa a estar de acordo com a LGPD.</Titulo>
                    <p>Aproveite para aprender sobre a Lei Geral de Proteção de Dados e como nós podemos ajudar sua empresa com esta questão.</p>

                    <div className={styles.botoes}>
                        <Botao>Traga sua empresa</Botao>
                        <Botao>Leia mais sobre a LGPD</Botao>
                    </div>

                </div>
                <img src={imagemHomeBottom} alt='cadeado LGPD' className={styles.imageBottomHome} />
                
            </div>
        </section>
    )
}