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
                            <h1>Patrimonio</h1>
                        </div>
                        <div className="col-md-10">
                            <h1>Conteudo</h1>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}