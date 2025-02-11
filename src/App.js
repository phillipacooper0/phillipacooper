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
      <Routes>  
        <Route path="/phillipacooper" element={<HomePage />} />
        <Route path="/phillipacooper/about" element={<AboutMe />} />
        <Route path="/phillipacooper/workexperience" element={<WorkExperience />} />
        <Route path="/phillipacooper/projects" element={<Projects />} />
        <Route path="/phillipacooper/contacts" element={<Contact />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
