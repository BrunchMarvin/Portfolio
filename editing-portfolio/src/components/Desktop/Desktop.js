import { useState } from "react";

import DesktopIcon from "./DesktopIcon";
import WindowManager from "./WindowManager";

function Desktop() {

    return (

        <div className="desktop">

            <DesktopIcon
                icon="📄"
                text="About Me"
            />

            <DesktopIcon
                icon="📁"
                text="Portfolio"
            />

            <DesktopIcon
                icon="💾"
                text="Archive"
            />

            <DesktopIcon
                icon="✉️"
                text="Contact"
            />

            <WindowManager/>

        </div>

    );

}

export default Desktop;