import styles from './NotFound.module.scss';
import classNames from 'classnames';
import notLogo from '../../assets/notFound/not_found.svg';
import stylesTema from '../../styles/Tema.module.scss';

export default function NotFound() {
    return (

        <div
            className={classNames({
                [styles.container]: true,
                [stylesTema.container]: true
            })}>
            <img src={notLogo} alt="" />
        </div>
    )
}
