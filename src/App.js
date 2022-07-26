import logo from './assets/img/logo_size_invert.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import ItemDetailContainer from './components/itemdetailcontainer/ItemDetailContainer';
import Cart from './components/cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Error404 from './components/Error404';
import CartForm from './components/cart/CartForm';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
      <div className="App">
        <NavBar logo={logo}/>
        <Routes>
          <Route exact path="/" element={<ItemListContainer />}/>
          <Route exact path="/category/:categoryId" element={<ItemListContainer />}/>
          <Route exact path="/item/:id" element={<ItemDetailContainer />}/>
          <Route exact path="/cart" element={<Cart/>}/>
          <Route exact path="/cartForm" element={<CartForm/>}/>
          <Route path="/*" element={< Error404 />}/>
        </Routes>       
      </div>    
      </BrowserRouter>
    </CartProvider>

  );
}

export default App;
