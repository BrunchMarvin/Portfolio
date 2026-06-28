import { useState } from "react";
import RetroWindow from "../RetroWindow/RetroWindow";

function WindowManager() {

    const [windows, setWindows] = useState([]);

    function openWindow(id, title, content) {

        // Don't open duplicates
        if (windows.find(w => w.id === id)) return;

        setWindows(prev => [
            ...prev,
            {
                id,
                title,
                content,
                x: 120 + prev.length * 30,
                y: 80 + prev.length * 30
            }
        ]);

    }

    function closeWindow(id) {

        setWindows(prev =>
            prev.filter(w => w.id !== id)
        );

    }

    return (
        <>
            {windows.map(window => (

                <div
                    key={window.id}
                    style={{
                        position: "absolute",
                        left: window.x,
                        top: window.y
                    }}
                >

                    <RetroWindow title={window.title}>

                        {window.content}

                        <br /><br />

                        <button
                            onClick={() => closeWindow(window.id)}
                        >
                            Close
                        </button>

                    </RetroWindow>

                </div>

            ))}
        </>
    );

}

export default WindowManager;