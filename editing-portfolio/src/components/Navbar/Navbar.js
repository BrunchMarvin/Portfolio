import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <div className="retro-nav">

            <Link to="/">HOME</Link>

            <Link to="/portfolio">PORTFOLIO</Link>

            <Link to="/services">SERVICES</Link>

            <Link to="/archive">ARCHIVE</Link>

            <Link to="/contact">CONTACT</Link>

        </div>
    );
}

export default Navbar;