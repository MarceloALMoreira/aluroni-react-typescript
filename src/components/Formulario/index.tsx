import * as React from "react";
import { useForm } from "react-hook-form";


type FormData = {
    firstName: string;
    lastName: string;
  };



export default function Forms() {
    const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
    const onSubmit = handleSubmit(data => console.log(data));



    return (
        <main>

            <div className="col-md-10 border bg-dark container">
                <h3 className="text-white">Formulario</h3>     
                <form onSubmit={onSubmit}>
      <label>First Name</label>
      <input {...register("firstName")} />
      <label>Last Name</label>
      <input {...register("lastName")} />
      <button
        type="button"
        onClick={() => {
          setValue("lastName", "luo");       
         
        }}
      >
        SetValue
      </button>
    </form>
            </div><br />
        </main>
    )
}