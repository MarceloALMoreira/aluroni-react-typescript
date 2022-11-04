import {
    Card,
    CardContent,
    Checkbox

} from "@mui/material";
import { Formik, Form, Field } from "formik";
import { CheckboxWithLabel, TextField } from 'formik-mui';
import { object, mixed, number } from "yup";

export default function Home() {
    return (
        <Card>
            <CardContent>
                <Formik
                    validationSchema={object({
                        money: mixed().when('millionaire', {
                            is: true,
                            then: number().required().min(1_000_00),
                            otherwise: number().required()
                        })
                    })}
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        millionaire: '',
                        money: 0,
                        description: ''
                    }}>
                    <Form autoComplete="off">
                        <Field name="firstName" component={TextField} label="First Name" />
                        <Field name="lastName" component={TextField} label="lastName" />
                        <Field name="firstName" type="checkbox" component={CheckboxWithLabel} Label={{ label: 'label I am a millionaire' }} />
                        <Field name="money" type="number" component={TextField} label="All the money I have" />
                        <Field name="description" component={TextField} label="Description" />




                    </Form>

                </Formik>
            </CardContent>
        </Card>
    )
}