import { Link } from 'react-router-dom'
import styles from './LinkHeader.module.css'

export default function LinkHeader({path, children}) {
    return (
        <Link to={path} className={styles.link__header}>{children}</Link>
    )
}