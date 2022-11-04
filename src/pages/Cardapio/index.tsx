import logo from '../../assets/img/logo.svg';
import styles from './Cardapio.module.scss';

export default function Cardapio() {
    return (
        <main>
            <nav className={styles.menu}>
                <img src={logo} alt="Logo Comdia Caseira" />
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A Casa do Código e da Massa
                </div>
            </header>
        </main>
    )
}