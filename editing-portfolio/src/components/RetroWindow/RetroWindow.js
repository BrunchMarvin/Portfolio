import "./RetroWindow.css";

function RetroWindow({ title, children }) {
  return (
    <div className="retro-window">
      <div className="retro-title-bar">
        <span>{title}</span>

        <div className="retro-buttons">
          <span>_</span>
          <span>□</span>
          <span>X</span>
        </div>
      </div>

      <div className="retro-body">
        {children}
      </div>
    </div>
  );
}

export default RetroWindow;