import { Paper, TextField } from '@mui/material';
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Forms() {




    return (
        <main>

            <div className="col-md-10 border  container">
                <h3 className="text-white">Formulario</h3>


                <div className="form container">
                    <h2 className="">Consulta de Bens Importados</h2>
                    <div className="">





                        <Paper className="p-2">
                            <h2>Form Demo</h2>
                            <div className="m-2">
                                <TextField
                                    label={"Text Value"} //optional
                                />
                                <TextField className='col-md-3'
                                        label={"Text Value"} //optional
                                    />
                            </div>
                        </Paper>
                        <br />
                        <br />
                        <br />
                        <hr />

                        { /*<form>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <label className="control-label" htmlFor="">Filtrar por:</label>
                                        <select className="form-select form-select-sm" aria-label="size 3 select example">
                                            <option selected></option>
                                        </select>
                                    </div>
                                    <div className="col-md-8"><br />
                                        <input type="text" className="form-control form-control-sm" aria-label="" aria-describedby="basic-addon1" />
                                    </div>
                                </div> <br />
                                <div className="row">
                                    <div className="col-md-4">
                                        <label className="control-label" htmlFor="">Secretaria:</label>
                                        <select className="form-select form-select-sm" aria-label="size 3 select example">
                                            <option selected></option>
                                        </select>
                                    </div>
                                    <div className="col-md-4">
                                        <label className="control-label" htmlFor="">Centro de custo:</label>
                                        <select className="form-select form-select-sm" aria-label="size 3 select example">
                                            <option selected></option>
                                        </select>
                                    </div>
                                    <div className="col-md-4">
                                        <label className="control-label" htmlFor="">Localização:</label>
                                        <select className="form-select form-select-sm" aria-label="size 3 select example">
                                            <option selected></option>
                                        </select>
                                    </div>
                                    <div className="p-1"> <br />
                                        <a className="btn btn-primary m-1">Filtrar</a>
                                        <a className="btn btn-danger">Limpar</a>
                                    </div>
                                </div>
                            </div>
                        </form >
                        https://blog.logrocket.com/using-material-ui-with-react-hook-form/
                        */}
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Filtrar Por:</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="disabledSelect form-select form-select-sm">Disabled select menu</Form.Label>
                                <Form.Select id="disabledSelect">
                                    <option>a</option>
                                </Form.Select>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </div>
        </main>

    )
}
