import logo from './logo.svg';
import './App.css';
import CustomHeader from "./components/Header/Header"
import { HashRouter, Route, Routes } from 'react-router-dom';
import AboutMe from './pages/AboutMe'
import HomePage from './pages/HomePage'
import WorkExperience from './pages/WorkExperience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <HashRouter>
    <div className="App">
        <CustomHeader className="App-header"></CustomHeader>
      <Routes>  
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/workexperience" element={<WorkExperience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
    </div>
    </HashRouter>
  );
}

export default App;
