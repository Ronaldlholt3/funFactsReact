import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FirstLanguage from './components/FirstLanguage';
import ParadigmShift from './components/ParadigmShift';
import ModernTrends from './components/ModernTrends';
import './App.css';

function App() {
  return (
    <Router basename="/funFactsReact"> 
      {/* <BrowserRouter basename="/funFactsReact"> */}
      <div className="app-container">
        <nav>
          <ul>
            <li>
              <Link to="/">Fortran</Link>
            </li>
            <li>
              <Link to="/oop">OOP Shift</Link>
            </li>
            <li>
              <Link to="/modern">Modern Trends</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<FirstLanguage />} />
          <Route path="/oop" element={<ParadigmShift />} />
          <Route path="/modern" element={<ModernTrends />} />
        </Routes>
      </div>
      {/* </BrowserRouter> */}
    </Router>
  );
}

export default App;