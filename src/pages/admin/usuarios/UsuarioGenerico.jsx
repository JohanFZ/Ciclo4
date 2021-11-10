import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Sidebar from '../../../components/Sidebar';
import { useUser } from '../../../context/user';

const UsuarioGenerico = () => {

  let params = useParams();
  const {userData} = useUser();

  console.log('params', params);
  return (
    <div>
      <Sidebar />
      Pagina de {params.nombreusuario}, la suma es igual a {userData.suma}
      <Link to="/">
        Ir al index
      </Link>
    </div>
  )
}

export default UsuarioGenerico