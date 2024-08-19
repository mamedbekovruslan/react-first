import logo from "./logo.svg";
import "./App.css";

function App() {
  // Весь код кроме помеченной строки - декларатиный
  return (
    <div className="App">
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
        {/* Вот это императиный стиль. */}
        <span>{new Date().getFullYear()}</span>
      </header>
    </div>
  );
}

export default App;
