import "./RetroWindow.css";

export default function RetroWindow({title,children}){

return(

<div className="window">

<div className="window-title">

<div>{title}</div>

<div>

□ ✕

</div>

</div>

<div className="window-body">

{children}

</div>

</div>

)

}
