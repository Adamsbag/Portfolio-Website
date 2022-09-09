import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my Portfolio Website!!!
        </p>
        <a
          className="App-link"
          href="https://github.com/adamsbag"
          target="_blank"
          rel="noopener noreferrer"
        >
          Checkout my GitHub repositories
        </a>
      </header>
    </div>
  );
}

export default App;
