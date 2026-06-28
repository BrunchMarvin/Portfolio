import { useEffect } from "react";
import "./SplashScreen.css";

function SplashScreen({ onComplete }) {

    useEffect(() => {

        const timer = setTimeout(() => {

            if (onComplete) {
                onComplete();
            }

        }, 3000);

        return () => clearTimeout(timer);

    }, [onComplete]);

    return (
        <div className="splash-screen">

            <h1>Munch_Bunch OS v1.0</h1>

            <p>Starting Editing Environment...</p>

        </div>
    );

}

export default SplashScreen;