import { style } from '@mui/system';
import React from 'react'
import logo from '../../../../assets/img/logo.svg';
import styles from './Item.module.scss'

export default function Item() {
    return (
        <div className={styles.item}>
            <div className={styles.item__imagem}>
                <img src={logo} alt="imagem" />
            </div>
            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2>Arroz</h2>
                    <p>descricao</p>
                </div>
                <div className={styles.item__tags}>
                    <div className={styles.item__tipo}>
                        Tipo do produto
                    </div>
                    <div className={styles.item__porcao}>
                        Porção, 400g
                    </div>
                    <div className={styles.item__qtd}>
                        Serve 2 Pessoas
                    </div>
                    <div className={styles.item__valor}>
                        R$ 50,00
                    </div>
                </div>
            </div>
        </div>
    )
}
