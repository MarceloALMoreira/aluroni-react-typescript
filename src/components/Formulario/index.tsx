import * as React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import styles from './Formulario.module.scss';

type Inputs = {
    example: string,
    exampleRequired: string,
};


export default function Forms() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    console.log(watch("example"))




    return (
        <main>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="col-md-10 border  container">
                <h3 className={styles.title}>teste</h3>
                <div className={styles.title__form}>
                    <div className="row">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input defaultValue="test" {...register("example")} />
                            <input {...register("exampleRequired", { required: true })} />
                            {errors.exampleRequired && <span>This field is required</span>}
                            <input type="submit" />
                        </form>
                    </div>
                </div>

                { /* https://blog.logrocket.com/using-material-ui-with-react-hook-form/ */}



            </div>
        </main>

    )
}
