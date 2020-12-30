import logo from './logo.svg';
import './App.css';
import Categories from "./components/Categories";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Categories />
    <div className="App">
      <header className="App-header">
        <p>
          Basic Picture Viewing App..
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
    <Footer />
    </div>
  );
}

export default App;
