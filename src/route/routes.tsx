import Menu from '../components/Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cardapio from '../pages/Cardapio';
import Inicio from '../pages/Inicio';
import PaginaPadrao from '../components/Pagina';


export default function AppRouter() {
    return (
        <main>
            <Router>
                <Menu />
                <Routes>
                    <Route path='/' element={<PaginaPadrao />}>
                        <Route index element={<Inicio />} />
                        <Route path='cardapio' element={<Cardapio />} />
                    </Route>
                </Routes>
            </Router>
        </main>
    );
}