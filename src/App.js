import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Sobre from './components/Sobre';
import Alunos from './components/Alunos';
import Galeria from './components/Galeria';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import {Nav} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <h1>App React CRUD</h1>
      <BrowserRouter>

      <Nav variant = "tabs">
        <Nav.Link as={Link} to="/">Página Inicial</Nav.Link>
        <Nav.Link as={Link} to="/Sobre">Sobre</Nav.Link>
        <Nav.Link as={Link} to="/Alunos">Cadastro de Alunos</Nav.Link>
        <Nav.Link as={Link} to="/Galeria">Galeria</Nav.Link>
      </Nav>
       
      <Routes>
        <Route path='/' index element ={<Home/>}></Route>
        <Route path='/Sobre'  element={<Sobre/>}></Route>
        <Route path='/Alunos'  element={<Alunos/>}></Route>
        <Route path='/Galeria'  element={<Galeria/>}></Route>
      </Routes>


      </BrowserRouter>
     

    </div>
  );
}

export default App;
