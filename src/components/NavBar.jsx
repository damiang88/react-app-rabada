import CartWidget from "./CartWidget";

export default function NavBar(){

    return (
        <nav className="sb-topnav navbar navbar-expand navbar-light bg-dark shadow">
                <a className="navbar-brand ps-3 text-light" href="./">  
                    Home
                </a>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active ml-3"> 
                        <a className="nav-link text-light" href="./" >
                            Productos
                        </a> 
                    </li>
                    <li className="nav-item active ml-3"> 
                        <a className="nav-link text-light" href="./" >
                            Ofertas
                        </a> 
                    </li>                  
                </ul>
                <CartWidget/>           
        </nav>
);
}