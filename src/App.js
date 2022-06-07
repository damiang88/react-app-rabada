import logo from './logo.svg';
import './App.css';
import './components/NavBar.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar.js';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Proyecto eCommerce DR
        </p>
      </header>
      
    </div>
  );
}

export default App;
