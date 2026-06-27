import "./Widgets.css";

function StatusWidget() {

    const today = new Date();

    const date = today.toLocaleDateString();

    return (
        <div className="status-widget">

            <p>
                <span className="green-light"></span>
                <strong> Editor:</strong> Online
            </p>

            <p>
                <strong>Location:</strong><br/>
                Sapporo, Japan
            </p>

            <p>
                <strong>Current Project:</strong><br/>
                Editing Portfolio Website
            </p>

            <p>
                <strong>Last Updated:</strong><br/>
                {date}
            </p>

        </div>
    );

}

export default StatusWidget;