import Menu from '../components/Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Cardapio from '../pages/Cardapio';
import Inicio from '../pages/Inicio';
import PaginaPadrao from '../components/Pagina';
import Sobre from '../pages/Sobre';
import Footer from '../components/Footer';
import NotFound from '../pages/NotFound';
import Prato from '../pages/Prato';
import { lazy, Suspense } from 'react';

const Cardapio = lazy(() => import('../pages/Cardapio'))

export default function AppRouter() {
    return (
        <main className='container'>
            <Router>
                <Suspense fallback={<p> Carregando..</p>}>
                    <Menu />
                    <Routes>
                        <Route path='/' element={<PaginaPadrao />}>
                            <Route index element={<Inicio />} />
                            <Route path='cardapio' element={<Cardapio />} />
                            <Route path='sobre' element={<Sobre />} />
                        </Route>
                        <Route path='prato/:id' element={<Prato />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                    <Footer />
                </Suspense >
            </Router>
        </main>
    );
}