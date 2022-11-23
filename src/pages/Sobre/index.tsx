import styles from './Sobre.module.scss';
import stylesTema from '../../styles/Tema.module.scss';
import casa from '../../assets/sobre/casa.png';
import massa1 from '../../assets/sobre/massa1.png';
import massa2 from '../../assets/sobre/massa2.png';
import React from 'react'

const imagens = [massa1, massa2];


export default function Sobre() {
    return (

        <section>
            <h3 className={stylesTema.titulo}>Sobre</h3>
            <div className={styles.sobreNos}>
                <img src={casa} alt="Casa Restaurante" />
                <div className={styles.sobreNos__texto}>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, cupiditate?
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, cupiditate?
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, cupiditate?
                    </p>
                </div>
            </div>
            <div className={styles.imagens}>
                {imagens.map((imagem, index) => (
                    <div key={index} className={styles.imagens__imagem}>
                        <img src={imagem} alt="imagem de massa" />
                    </div>
                ))}
            </div>
        </section>
    )
}
