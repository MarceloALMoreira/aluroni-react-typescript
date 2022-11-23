import Menu from '../components/Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cardapio from '../pages/Cardapio';
import Inicio from '../pages/Inicio';
import PaginaPadrao from '../components/Pagina';
import Sobre from '../pages/Sobre';
import Footer from '../components/Footer';
import NotFound from '../pages/NotFound';
import Patro from '../pages/Patro';


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
                    </Route>
                    <Route path='*' element={<NotFound />} />
                    <Route path='patro/:id' element={<Patro />} />
                </Routes>
                <Footer />
            </Router>
        </main>
    );
}