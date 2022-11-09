
import styles from './Formulario.module.scss';


export default function Forms() {





    return (
        <main>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="col-md-10   container">
                <h3 className={styles.title}>teste</h3>
                <div className={styles.title__form}>
                    <table className="table table-hover text-white">
                        <thead>
                            <tr>
                                <th scope="col">0</th>
                                <th scope="col">1</th>
                                <th scope="col">2</th>
                                <th scope="col">3</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr className={ styles.table}>
                                <th scope="row">3</th>
                                <td>Larry the Bird</td>
                                <td>@twitter</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                { /* https://blog.logrocket.com/using-material-ui-with-react-hook-form/ */}



            </div>
        </main>

    )
}
