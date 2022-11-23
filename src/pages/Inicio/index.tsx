import NossaCasa from '../../assets/img/nossa_casa.png'
import Cardapio from '../../data/cardapio.json'
import styles from './inicio.module.scss';
import stylesTema from '../../styles/Tema.module.scss';
export default function Inicio() {
    let patroRecomendados = [...Cardapio];
    patroRecomendados = patroRecomendados.sort(() => 0.5 - Math.random()).
        splice(0, 3);

    return (

        <section>
            <h3 className={stylesTema.titulo}>
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
            <h3 className={stylesTema.titulo}>Nossa casa</h3>
            <div className={styles.nossaCasa}>
                <img src={NossaCasa} alt="Casa do Restaurante" />
                <div className={styles.nossaCasa__endereco}>
                    Rua Santa Gloria, 774 <br /> <br /> Vila Mariana - SP
                </div>
            </div>
        </section >
    )
}
