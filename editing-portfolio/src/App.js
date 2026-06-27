import React from 'react';
import Taskbar from "./components/Taskbar/Taskbar";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import MarqueeBar from './components/MarqueeBar/MarqueeBar';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Archive from './pages/Archive';
import Contact from './pages/Contact';
import SiteBanner from './components/SiteBanner/SiteBanner';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
    <SiteBanner />
    <MarqueeBar />
      {/**<nav className="retro-nav">
          <div className="container">
            <Link to="/" className="logo">

            </Link>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/Archive">Archive</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </nav>*/}

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/Archive" element={<Archive />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="container">
            <p>&copy; HAHAHHAHAHAHHAHHAHHA</p>
            <div className="social-links">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </footer>
      </div>
      <Taskbar />
    </Router>
  );
}

export default App;
