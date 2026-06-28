import { useEffect } from "react";

function LoadingScreen({ onComplete }) {

    useEffect(() => {

        const timer = setTimeout(() => {

            if (onComplete) {
                onComplete();
            }

        }, 2500);

        return () => clearTimeout(timer);

    }, [onComplete]);

    return(

        <div
            style={{
                background:"black",
                color:"white",
                width:"100vw",
                height:"100vh",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                flexDirection:"column",
                fontFamily:"Tahoma"
            }}
        >

            <h2>Loading User Profile...</h2>

            <p>Please wait...</p>

        </div>

    );

}

export default LoadingScreen;