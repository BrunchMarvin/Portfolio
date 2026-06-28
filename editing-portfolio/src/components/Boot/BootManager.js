import { useState } from "react";

import BiosScreen from "./BiosScreen";
import SplashScreen from "./SplashScreen";
import LoginScreen from "./LoginScreen";
import LoadingScreen from "./LoadingScreen";

function BootManager({ children }) {

    const [stage, setStage] = useState("bios");

    switch(stage){

        case "bios":
            return (
                <BiosScreen
                    onComplete={() => setStage("splash")}
                />
            );

        case "splash":
            return (
                <SplashScreen
                    onComplete={() => setStage("login")}
                />
            );

        case "login":
            return (
                <LoginScreen
                    onComplete={() => setStage("loading")}
                />
            );

        case "loading":
            return (
                <LoadingScreen
                    onComplete={() => setStage("desktop")}
                />
            );

        default:
            return children;

    }

}

export default BootManager;