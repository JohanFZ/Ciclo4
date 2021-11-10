import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/styles.css';
import Index from './pages/Index';
import Contacto from './pages/contacto';
import IndexAdmin from './pages/admin/Index';
import Usuarios from './pages/admin/usuarios/Index';
import Johan from './pages/admin/usuarios/Johan';
import LayoutAdmin from './layout/LayoutAdmin';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Index/>}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="/admin" element={<LayoutAdmin />}>
            <Route path="" element={<IndexAdmin />}></Route>
            <Route path="usuarios" element={<Usuarios />}></Route>
            <Route path="usuarios/johan" element={<Johan />}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
