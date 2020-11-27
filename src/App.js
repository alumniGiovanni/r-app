import logo from './logo.svg';
import './App.css';
import Game from './Game';

const name = 'Teste';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form>
          <div>
            <input type='text' />
          </div>
        </form>
        <h1>Olá, {name} </h1>
        <div>
          <Game />
        </div>
      </header>
    </div>

  );
}

export default App;
