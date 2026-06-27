import "./MarqueeBar.css";

function MarqueeBar() {
  return (
    <marquee className="marquee-bar" scrollAmount="5">
      ★ Bralf's Portfolio • Digital Video Editing • Filmography ★
      &nbsp;&nbsp;&nbsp;
      Latest Projects Coming Soon ★
      &nbsp;&nbsp;&nbsp;
      Editing • Scriptwriting • Colour Grading ★
    </marquee>
  );
}

export default MarqueeBar;