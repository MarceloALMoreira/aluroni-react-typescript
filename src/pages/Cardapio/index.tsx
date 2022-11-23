import Buscador from './Buscador';
import styles from './Cardapio.module.scss';
import { useState } from 'react';
import Filters from './Filtros';
import Ordenador from './Ordenador';
import Itens from './Itens';

export default function Cardapio() {
    const [busca, setBusca] = useState('');
    const [filtro, setFiltro] = useState<number | null>(null);
    const [ordenador, setOrdenador] = useState('');
    return (
        <section className={styles.cardapio}>
            <h3 className={styles.carpadio__title}>Cardápio</h3>
            <Buscador busca={busca} setBusca={setBusca} />
            <div className={styles.cardapio__filters}>
                <Filters filtro={filtro} setFiltro={setFiltro} />
                <Ordenador ordernador={ordenador} setOrdenador={setOrdenador} />
            </div>
            <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
        </section>

    );
}