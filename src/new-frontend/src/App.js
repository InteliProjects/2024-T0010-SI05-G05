import logo from './logo.svg';
import './App.css';
import { GlobalStyles } from './global';

function App() {
  return (
    <GlobalStyles>
    <div className="App" style={{margin:"0"}}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </GlobalStyles>
  );
}

export default App;
