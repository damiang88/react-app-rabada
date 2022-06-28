import logo from './assets/img/logo_size_invert.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import ItemDetailContainer from './components/itemdetailcontainer/ItemDetailContainer';
import Cart from './components/cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
//<ItemListContainer greeting={"Bienvenido"}/> 

  return (

    <BrowserRouter>
    <div className="App">
      <NavBar logo={logo}/>
      <Routes>
        <Route exact path="/" element={<ItemListContainer />}/>
        <Route exact path="/category/:id" element={<ItemListContainer />}/>
        <Route exact path="/item/:id" element={<ItemDetailContainer />}/>
        <Route exact path="/cart" element={<Cart/>}/>
      </Routes>       
    </div>    
    </BrowserRouter>
    
  );
}

export default App;
