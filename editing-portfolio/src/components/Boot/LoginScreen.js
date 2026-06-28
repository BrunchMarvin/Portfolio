import "./LoginScreen.css";

function LoginScreen({ onComplete }) {

    return (

        <div className="login-screen">

            <div className="login-window">

                <h3>Welcome to Munch_Bunch OS</h3>

                <p>User:</p>

                <input
                    value="Guest"
                    readOnly
                />

                <button
                    onClick={onComplete}
                >
                    Log In
                </button>

            </div>

        </div>

    );

}

export default LoginScreen;