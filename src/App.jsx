import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/styles.css';
import Index from './pages/Index';
import Contacto from './pages/contacto';
import IndexAdmin from './pages/admin/Index';
import Usuarios from './pages/admin/usuarios/Index';
import UsuarioGenerico from './pages/admin/usuarios/UsuarioGenerico';
import LayoutAdmin from './layout/LayoutAdmin';
import { UserContext } from './context/user';

function App() {
  const [userData, setUserData] = useState({"nombre": "johan", suma : 0});
  return (
    <UserContext.Provider value={{userData, setUserData}}>
      <Router>
        <Routes>
          <Route path="/" element={<Index/>}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="/admin" element={<LayoutAdmin />}>
            <Route path="" element={<IndexAdmin />}></Route>
            <Route path="usuarios" element={<Usuarios />}></Route>
            <Route path="usuarios/:nombreusuario" element={<UsuarioGenerico />}></Route>
          </Route>
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
