import './App.css';
import Index from './pages/Index';
import Contacto from './pages/contacto';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/styles.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Index/>}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
