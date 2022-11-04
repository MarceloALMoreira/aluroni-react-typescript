import logo from '../../assets/img/logo.svg';
import styles from './Cardapio.module.scss';

export default function Cardapio() {
    return (
        <nav className={styles.menu}>
            <img src={logo} alt="Logo Comdia Caseira" />
        </nav>
    )
}