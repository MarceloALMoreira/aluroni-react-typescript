import Menu from '../components/Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cardapio from '../pages/Cardapio';
import Inicio from '../pages/Inicio';
import PaginaPadrao from '../components/Pagina';
import Sobre from '../pages/Sobre';
import Prato from '../pages/Prato';
import Footer from '../components/Footer';
import NotFound from '../pages/NotFound';



export default function AppRouter() {
    return (
        <main>
            <Router>
                <Menu />
                <Routes>
                    <Route path='/' element={<PaginaPadrao />}>
                        <Route index element={<Inicio />} />
                        <Route path='cardapio' element={<Cardapio />} />
                        <Route path='sobre' element={<Sobre />} />
                        <Route path='prato/:id' element={<Prato/>} />
                    </Route>
                    <Route path='*' element={<NotFound />} />
                   
                </Routes>
                <Footer />
            </Router>
        </main>
    );
}