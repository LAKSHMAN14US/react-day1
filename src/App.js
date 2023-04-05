import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>
          Let we see the output of JavaScript
        </h1>
        <button onClick={window['alertMsg']}>Click to call msgAlert</button>
      </header>
    </div>
  );
}

export default App;
