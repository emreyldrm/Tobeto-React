import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { Button, FormField, Label } from 'semantic-ui-react'
import * as Yup from "yup"
import KodlamaIoTextInput from '../utilities/customFormControls/KodlamaIoTextInput'

export default function ProductAdd() {
    const initialValues = { modelName: "", dailyPrice: 10 }

    const schema = Yup.object({
        modelName: Yup.string().required("Model  adı zorunlu"),
        dailyPrice: Yup.number().required("Ürün fiyatı zorunlu")
    })

    return (
        <div>
            <Formik 
            initialValues={initialValues} 
            validationSchema={schema}  
            onSubmit={(values)=>{
                console.log(values)
            }}
            >
                <Form className='ui form'>
                    <KodlamaIoTextInput name="modelName" placeholder="Model Adı"/>
                    <KodlamaIoTextInput name="dailyPrice" placeholder="Günlük Ücret"/>

                    {/* <FormField>
                        <Field name="modelName" placeholder="Model Adı"></Field>
                        <ErrorMessage name='modelName' render={error =>
                            <Label pointing basic color='red' content={error}></Label>
                        }></ErrorMessage>
                    </FormField> */}
                    {/* <FormField>
                        <Field name="dailyPrice" placeholder="Günlük Ücret"></Field>
                        <ErrorMessage name='dailyPrice' render={error =>
                            <Label pointing basic color='red' content={error}></Label>
                        }></ErrorMessage>
                    </FormField> */}
                    <Button color='green' type="submit">Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}
