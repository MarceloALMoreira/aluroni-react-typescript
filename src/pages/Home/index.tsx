import Nav from '../../components/Navbar';
import './style.css';
import React from 'react';
export default function Home() {
  
    return (

        <div className="">
            <Nav />
            { /*https://tanstack.com/table/v8/docs/adapters/react-table */}

            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h1 className='border'>Resumo</h1>
                        <table className="table table-hover table-condensed text-center">
                            <thead >
                                <tr >
                                    <th className="">COMPETÊNCIA</th>
                                    <th className="">PATRIMÔNIO</th>
                                    <th className="">CONTABILIDADE</th>
                                    <th className="">DIREFENÇA</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr id="contabilXpat_202101" >
                                    <td>01/2021</td>
                                    <td className=""></td>
                                    <td className="">5.000,00</td>
                                    <td className=""></td>
                                </tr>
                                <tr id="contabilXpat_202102" className="">
                                    <td>02/2021</td>
                                    <td className="">700,00</td>
                                    <td className="">2.000,00</td>
                                    <td className="">-1.300,00</td>
                                </tr>
                            </tbody>
                        </table>
                        <button className='btn btn-outline'>Detalhes</button>
                    </div>
                    <div className="col-md-4">
                        <h1 className='border'>Lateral Cliente</h1>
                    </div>
                </div>
            </div>
        </div>

    )
}