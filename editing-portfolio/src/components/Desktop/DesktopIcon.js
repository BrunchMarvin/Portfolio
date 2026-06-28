function DesktopIcon({ icon, text, onDoubleClick }) {

    return (

        <div
            className="desktop-icon"
            onDoubleClick={onDoubleClick}
        >

            <div className="desktop-image">
                {icon}
            </div>

            <span>{text}</span>

        </div>

    );

}

export default DesktopIcon;