import Cardapio from '../../data/cardapio.json'
import styles from './inicio.module.scss';

export default function Inicio() {
    let patroRecomendados = [...Cardapio];
    patroRecomendados = patroRecomendados.sort(() => 0.5 - Math.random()).
        splice(0, 3);

    return (

        <section>
            <h3 className={styles.title}>
                Recomendações da cozinha
            </h3>
            <div className={styles.recomendados}>
                {patroRecomendados.map(item => (
                    <div key={item.id} className={styles.recomendado}>
                        <div className={styles.recomendado__imagem}>
                            <img src={item.photo} alt={item.title} />
                        </div>
                        <button className={styles.recomendado__botao}>Ver mais</button>
                    </div>

                ))}
            </div>
        </section >
    )
}
