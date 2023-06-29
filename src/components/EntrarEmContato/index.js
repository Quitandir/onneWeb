import Botao from '../Botao'
import styles from './EntrarEmContato.module.css'

export default function EntrarEmContato() {
    return (
        <div className={styles.input__contato}>
            <label for='entrarEmContato' >Coloque seu email para conhecer mais sobre a ONNE.</label>
            <form>
                <input name='entrarEmContato' type='email' placeholder='Digite seu email'/>
                <Botao>Entrar em contato</Botao>
            </form>
            
        </div>
    )
}