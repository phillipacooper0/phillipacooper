import logo from './logo.svg';
import './App.css';
import CustomHeader from "./components/Header/Header"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutMe from './pages/AboutMe'
import HomePage from './pages/HomePage'
import WorkExperience from './pages/WorkExperience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <CustomHeader className="App-header"></CustomHeader>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header> */}
      <Routes>  
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/workexperience" element={<WorkExperience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
