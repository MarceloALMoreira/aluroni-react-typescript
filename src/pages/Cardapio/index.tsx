import logo from '../../assets/img/logo.svg';
import Buscador from './Buscador';
import styles from './Cardapio.module.scss';
import { useState } from 'react';
import Filters from './Filtros';

export default function Cardapio() {
    const [busca, setBusca] = useState("");
    const [filtro, setFiltro] = useState<number | null>(null);
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
            <section className={styles.cardapio}>
                <h3 className={styles.carpadio__title}>Cardápio</h3>
                <Buscador busca={busca} setBusca={setBusca} />
                <div className={styles.cardapio__filters}>
                    <Filters filtro={filtro} setFiltro={setFiltro} />
                </div>
            </section>
        </main>
    )
}