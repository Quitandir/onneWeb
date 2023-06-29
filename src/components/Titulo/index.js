import styles from './Titulo.module.css'

export default function Titulo({children, alinhamento}) {
    return (
        <h2 className={`
        ${styles.titulo} 
        ${styles[alinhamento]}
    `}>{children}</h2>
        
    )
}