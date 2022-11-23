import styles from './PaginaPadrao.module.scss';
import stylesTema from '../../styles/Tema.module.scss';
import { Outlet } from 'react-router-dom'

export default function PaginaPadrao() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A Casa do Código e da Massa
                </div>
            </header>
            <div className={stylesTema.container}>
                <Outlet />
            </div>
        </>

    )
}