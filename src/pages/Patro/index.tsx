import styles from './Patro.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { Tags } from 'react-bootstrap-icons';
import classNames from 'classnames';


export default function Patro() {
    const { state } = useLocation();
    const { prato } = state();

    return (
        <>
            <button className={styles.voltar}>
                {'< Voltar'}
            </button>
            <section className={styles.container}>
                <h1 className={styles.titulo}>
                    {prato.title}
                </h1>
                <div className={styles.imagem}>
                    <img src={prato.photo} alt={prato.title} />
                </div>
                <div className={styles.conteudo}>
                    <p className={styles.conteudo__description}>
                        <div className={styles.tags}>
                            {/*ClassNames*/}
                            <div className={styles.tags__porcao}>
                                {prato.size}g
                            </div>
                            <div className={styles.tags__qtdpessoas}>
                                Serve {prato.serving} pessoa {prato.serving === 1 ? '' : 's'}
                            </div>
                            <div className={styles.tags__valor}>
                                R$ {prato.price.toFixed(2)}
                            </div>
                        </div>
                    </p>

                </div>
            </section>
        </>
    )
}
