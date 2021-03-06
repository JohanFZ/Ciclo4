import React, {useState, useEffect} from 'react';
import Button from '../components/Button';
import { useUser } from '../context/user';
import { Link } from 'react-router-dom';
import button from '../components/Button';
import { useDark } from '../context/dark';

const Index = () => {

  const { userData, setUserData } = useUser();
  const {dark} = useDark();

  const [variable, setVariable] = useState('Hola mundo');
  const [valorInput, setValorInput] = useState();

  const [ valor1, setValor1 ] = useState(0);
  const [ valor2, setValor2 ] = useState(0);
  const [ suma, setSuma ] = useState(0);

  const funcionClick = () => {
    setVariable(valorInput);
  }

  const cambioInput = (e) =>{
    setValorInput(e.target.value);
  }

  useEffect(() => {
    console.log('Valor 1  ', valor1, 'Valor 2 ', valor2);
    console.log('info del usuario', userData);
    setSuma(valor1 + valor2);
  }, [valor1, valor2]);

  return (
    <div className={`container ${dark?"fondo-oscuro":"fondo-claro"}`}>
      <div>
        <span>El valor de la variable es: </span>
        {variable}
      </div>
      <input value={valorInput} onChange={cambioInput} type="text" placeholder="Ingrese el nuevo valor de la variable" />
      <button onClick={funcionClick}>Haz clic acá</button>
      <p>El resultado de la suma es : {suma}</p>
      <div className="form">
        <label htmlFor="">Valor 1 : </label>
        <input
        onChange={(e) => setValor1(parseInt(e.target.value))}
          value={valor1}
          type="number"
          placeholder="Valor 1"
        />
        <label htmlFor="">Valor 2 : </label>
        <input onChange={(e) => setValor2(parseInt(e.target.value))} value={valor2} type="number" placeholder="Valor 2" />
      </div>
      <button className="button" onClick={() => setUserData({...setUserData, suma: suma})}>Guardar Suma</button>
      <Link to="admin/usuarios/johan" className="link">
        Ir a la pagina del usuario
      </Link>
      <Link to="configuracion" className="link">
        Ir a la pagina de configuracion
      </Link>
    </div>
  )
}

export default Index
