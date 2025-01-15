import logo from './logo.svg';
import './App.css';
import CustomHeader from "./components/Header/Header"
import CollapsedExcerpt from './components/CollapsedExcerpt/CollapsedExcerpt';

function App() {
  return (
    <div className="App">
        <CustomHeader className="App-header"></CustomHeader>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header> */}
      <CollapsedExcerpt></CollapsedExcerpt>
    </div>
  );
}

export default App;
