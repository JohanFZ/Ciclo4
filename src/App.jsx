import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/styles.css';
import Index from './pages/Index';
import Contacto from './pages/contacto';
import IndexAdmin from './pages/admin/Index';
import Usuarios from './pages/admin/usuarios/Index';
import UsuarioGenerico from './pages/admin/usuarios/UsuarioGenerico';
import Layout from './layout/Layout';
import LayoutAdmin from './layout/LayoutAdmin';
import Configuracion from './pages/Configuracion';
import { UserContext } from './context/user';
import { DarkContext } from './context/dark';

function App() {
  const [userData, setUserData] = useState({"nombre": "johan", suma : 0});
  const [dark, setDark] = useState(false);
  return (
    <DarkContext.Provider value={{dark, setDark}}>
      <UserContext.Provider value={{userData, setUserData}}>
        <Router>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route path="" element={<Index/>} />
              <Route path="contacto" element={<Contacto />} />
              <Route path="configuracion" element={<Configuracion />} />
            </Route>
            <Route path="/admin" element={<LayoutAdmin />}>
              <Route path="" element={<IndexAdmin />}></Route>
              <Route path="usuarios" element={<Usuarios />}></Route>
              <Route path="usuarios/:nombreusuario" element={<UsuarioGenerico />}></Route>
            </Route>
          </Routes>
        </Router>
      </UserContext.Provider>
    </DarkContext.Provider>
  );
}

export default App;
