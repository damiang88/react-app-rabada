import {NavLink, Link} from'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './cartWidget/CartWidget'

export default function NavBar(props){

    return (    
        <Navbar bg="dark" expand="lg">
        <Container>
            <Link to={"/"}>
            <Navbar.Brand>
                <img src={props.logo} className="" width="74" height="74" alt="" />
            </Navbar.Brand>
            </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <NavLink to={"/category/Productos"} className="nav-link text-light">
                Productos
            </NavLink>
            <NavLink to={"/category/LineaGamer"} className="nav-link text-light">
                Linea Gamer
            </NavLink>
            <CartWidget/>           
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
);
}