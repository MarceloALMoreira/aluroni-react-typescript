import Nav from '../../components/Navbar';
import './style.css';
export default function Home() {
    return (
        <div className="">
            <Nav />

            <div className="container">
                <div className="conteudo">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="card">
                                <img className='card__user' src="" alt="User" />
                                <p className=''>Maria Gonçalve</p><hr />
                            </div>
                        </div>
                        <div className="col-md-10">
                            <h1>Patrimônio</h1>   
                            <div className="row">
                                <div className="col-md-4 bg-dark ">
                                    <h1>1</h1>
                                </div>
                                <div className="col-md-4 bg-dark ">
                                    <h1>2</h1>
                                </div>
                                <div className="col-md-4 bg-dark ">
                                    <h1>3</h1>
                                </div>
                            </div>                       
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}