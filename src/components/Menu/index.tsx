import logo from '../../assets/img/logo.svg';
import styles from './Menu.module.scss';


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
                        <a href={rota.to}>
                            {rota.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav >
    )
}
