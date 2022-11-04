import filtros from './filtros.json';
import styles from './Filtros.module.scss';

type IOpcao = typeof filtros[0]

export default function Filters() {
    function selectFilters(opcao: IOpcao) {

    }
    return (
        <div className={styles.filtros}>
            {filtros.map((opcao) => (
                <button className={styles.filtros__filtro} key={opcao.id} onClick={() => selectFilters(opcao)}>
                    {opcao.label}
                </button>
            ))}
        </div>
    )
}