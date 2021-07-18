import logo from './logo.svg';
import './App.css';

function App() {
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
          This is my sample portfolio          
        </a>
        <button> Click me </button>
        <button className="bg-red-500 hover:bg-blue-700 text-white font-bold m-4 py-2 px-4 rounded-full">
            Tailwind Button
        </button>
      </header>
    </div>
  );
}

export default App;
