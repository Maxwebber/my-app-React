import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Sobre from './components/Sobre';
import Alunos from './components/Alunos';
import Galeria from './components/Galeria';
import Blog from './components/Blog';
import logotrue from "./components/img/logotrue.png";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      {/* <h1></h1> */}
      <BrowserRouter>
        <Navbar bg="light">
          <Container>
            <Navbar.Brand href="#home">
              <img
                src={logotrue}
                width="100"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Container>

          <Navbar bg="light" variant="light" className="justify-content-end" >
            <Nav className="justify-content-end">
              <Nav.Link as={Link} to="/"  >Home</Nav.Link>
              <Nav.Link as={Link} to="/Sobre">Sobre</Nav.Link>
              <Nav.Link as={Link} to="/Alunos">Career</Nav.Link>
              <Nav.Link as={Link} to="/Galeria">Contact </Nav.Link>
              <Nav.Link as={Link} to="/blog">Blog </Nav.Link>
            </Nav>
          </Navbar>
        </Navbar>

        <Routes>
          <Route path='/' index element={<Home />}></Route>
          <Route path='/Sobre' element={<Sobre />}></Route>
          <Route path='/Alunos' element={<Alunos />}></Route>
          <Route path='/Galeria' element={<Galeria />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
