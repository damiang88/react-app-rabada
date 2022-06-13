import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/itemlist/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>      
      <header className="App-header">
      <ItemListContainer greeting={"Bienvenido"}/>
      </header>     
    </div>
  );
}

export default App;
