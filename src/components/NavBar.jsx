import CartWidget from "./CartWidget";

export default function NavBar(){

    return (
        <nav class="sb-topnav navbar navbar-expand navbar-light bg-dark shadow">
                <a class="navbar-brand ps-3 text-light" href="./">  
                    Home
                </a>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active ml-3"> 
                        <a class="nav-link text-light" href="./" >
                            Productos
                        </a> 
                    </li>
                    <li class="nav-item active ml-3"> 
                        <a class="nav-link text-light" href="./" >
                            Ofertas
                        </a> 
                    </li>                  
                </ul>

                <CartWidget/>           
        </nav>

);
}