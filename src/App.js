import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import ItemDetailContainer from './components/itemdetailcontainer/ItemDetailContainer';

function App() {
//<ItemListContainer greeting={"Bienvenido"}/> 

  return (
    <div className="App">
      <NavBar/>      
      <header className="App-header">
       <ItemDetailContainer greeting={"Bienvenido"}/> 

      </header>     
    </div>
  );
}

export default App;
