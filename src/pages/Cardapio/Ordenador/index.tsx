import { useState } from 'react';
import styles from './Ordenador.module.scss';
import opcoes from './opcoes.json';
import classNames from 'classnames';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

interface Props {
    ordernador: string,
    setOrdenador: React.Dispatch<React.SetStateAction<string>>
}

export default function Ordenador({ ordernador, setOrdenador }: Props) {
    const [aberto, setAberto] = useState(false);
    const nomeOrdenador = ordernador && opcoes.find(opcao => opcao.value === ordernador)?.nome;
    return (
        <button
            className={classNames({
                [styles.ordenador]: true,
                [styles['ordenador--atvio']]: ordernador !== '',
            })}
            onClick={() => setAberto(!aberto)}
            onBlur={() => setAberto(false)}
        >

            <span>{nomeOrdenador || 'Ordenadr por'}</span>
            {aberto ?
                (<MdKeyboardArrowUp size={20} />) :
                (<MdKeyboardArrowDown size={20} />)
            }

            <div className={classNames({
                [styles.ordenador__options]: true,
                [styles['ordenador__options--ativo']]: aberto,
            })}>
                {opcoes.map(opcao => (
                    <div
                        className={styles.ordenador__option}
                        key={opcao.value}
                        onClick={() => setOrdenador(opcao.value)}


                    >
                        {opcao.nome}
                    </div>
                ))}</div>
        </button >
    );
}