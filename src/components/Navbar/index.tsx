import '../Navbar/style.css'
import logo from '../../assets/img/logo.png'
export default function Nav() {
    
    return (
        <>
            <div className="navcolor">
                <nav className="navbar navbar-expand-lg navbar-primary">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt="" />
                        </a>
                        <div className="navBar" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                                <li className="nav-item"><a className="nav-link" href="/">HOME</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">CADASTRO</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">MOVIMENTOS</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">RELATÓRIOS</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">EXPORTAÇÃO SIGAS</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">NOTAS DE ATUALIZAÇÕES</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div >
        </>
    )
}
