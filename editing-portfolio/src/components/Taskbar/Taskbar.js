import "./Taskbar.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Taskbar() {

    const [time, setTime] = useState("");

    useEffect(() => {

        const updateClock = () => {

            const now = new Date();

            setTime(
                now.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit"
                })
            );

        };

        updateClock();

        const interval = setInterval(updateClock,1000);

        return () => clearInterval(interval);

    }, []);

    return (

        <footer className="taskbar">

            <button className="start-button">
                🟩 Start
            </button>

            <div className="task-buttons">

                <Link to="/">🏠 Home</Link>

                <Link to="/portfolio">🎬 Projects</Link>

                <Link to="/services">💼 Services</Link>

                <Link to="/archive">📁 Archive</Link>

                <Link to="/contact">📧 Contact</Link>

            </div>

            <div className="taskbar-clock">

                {time}

            </div>

        </footer>

    );

}

export default Taskbar;