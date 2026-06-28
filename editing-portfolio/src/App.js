import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

// Boot "Fake Windows Booting Sequence"
import BootManager from "./components/Boot/BootManager";

// Desktop Components
import SiteBanner from "./components/SiteBanner/SiteBanner";
import MarqueeBar from "./components/MarqueeBar/MarqueeBar";
import Taskbar from "./components/Taskbar/Taskbar";

// Pages
import Desktop from "./components/Desktop/Desktop";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Archive from "./pages/Archive";
import Contact from "./pages/Contact";

function App() {
  return (
    <BootManager>
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">

          {/* Banner */}
          {/* <SiteBanner /> */}

          {/* News Ticker */}
        {/*<MarqueeBar />*/}

          {/* Main Desktop Area */}
          <main className="main-content">

            <Routes>
              <Route path="/" element={<Desktop />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/services" element={<Services />} />
              <Route path="/archive" element={<Archive />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>

          </main>

          {/* Footer (Temporary) */}
       {/*<footer className="footer">
            <div className="container">
              <p>© Property of The Munch Bunch 2026. We are not responsible for any content on this website, damange to your property and or memetic hazards that may cause your brain to EXPLODE!</p>
            </div>
         </footer>

          {/* Windows Taskbar */}
          <Taskbar />

        </div>
      </Router>
    </BootManager>
  );
}

export default App;