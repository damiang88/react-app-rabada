import CartWidget from "./CartWidget/CartWidget";
import {Link, NavLink} from'react-router-dom';


export default function NavBar(props){

    return (    
        <nav className="sb-topnav navbar navbar-expand navbar-light px-3 bg-dark shadow">
                <Link to='/' className="navbar-brand" >
                <img src={props.logo} className="" width="74" height="74" alt="" />
                </Link>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active ml-3"> 
                        <NavLink to={"/category/Productos"} className="nav-link text-light">
                            Productos
                        </NavLink>
                    </li>
                    <li className="nav-item active ml-3"> 
                        <NavLink to={"/category/LineaGamer"} className="nav-link text-light">
                            Linea Gamer
                        </NavLink>
                    </li>                  
                </ul>
            <CartWidget/>           
        </nav>
);
}