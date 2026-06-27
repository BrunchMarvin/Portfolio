import "./Home.css";
import StatusWidget from "../components/widgets/StatusWidget";
import RetroWindow from "../components/RetroWindow/RetroWindow";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-grid">

      <RetroWindow title="Navigation">

    <div className="sidebar-buttons">

        <Link to="/" className="sidebar-button">
            🏠 Home
        </Link>

        <Link to="/portfolio" className="sidebar-button">
            🎬 Portfolio
        </Link>

        <Link to="/services" className="sidebar-button">
            💼 Services
        </Link>

        <Link to="/Archive" className="sidebar-button">
            📁 Archive
        </Link>

        <Link to="/contact" className="sidebar-button">
            📧 Contact
        </Link>

    </div>

</RetroWindow>

      <RetroWindow title="Welcome">
        <h2>いらっしゃいませ!</h2>

        <p>
          Welcome to my personal editing portfolio! I'm Bralf, a passionate video editor and storyteller.
        </p>

        <p>
          This website is my digital archive, showcasing editing projects,
          motion graphics, and creative experiments.
        </p>

        <p>
          Thanks for stopping by!
        </p>
      </RetroWindow>

      <RetroWindow title="System Status">
       <StatusWidget />
      </RetroWindow>

      <RetroWindow title="Featured Project">
        <div className="video-placeholder">
          📼 Featured video coming soon...
        </div>
      </RetroWindow>

    </div>
  );
}

export default Home;