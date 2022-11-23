import logo from '../../assets/img/logo.svg';
import styles from './Menu.module.scss';
import { Link } from 'react-router-dom'


export default function Menu() {
    const rotas = [{
        label: 'Inicio',
        to: '/'
    }, {
        label: 'Cardapadio',
        to: '/cardapio'
    }, {
        label: 'Sobre',
        to: '/sobre'
    }];
    return (
        <nav className={styles.menu}>
            <img src={logo} alt="Logo Comdia Caseira" />
            <ul className={styles.menu__list}>
                {rotas.map((rota, index) => (
                    <li key={index} className={styles.menu__link}>
                        <Link to={rota.to}>
                            {rota.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav >
    )
}
