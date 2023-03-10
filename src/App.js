import React, { useEffect, useState } from "react";
import "./App.css";


import {
    spiralOne, spiralTwo
} from "./art";

const artFunctions = [spiralOne, spiralTwo];

const App = () => {
    const [currentFunctionID, setCurrentFunctionID] = useState(0);

    const navButtonClicked = (change) => {
        setCurrentFunctionID(Math.min(artFunctions.length-1, Math.max(0,currentFunctionID + change)));
    }

    useEffect(() => {
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        ctx.strokeStyle = "#ccc";
        let i = 4.5;
        const intervalId = setInterval(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            i += 0.00001;
            artFunctions[currentFunctionID](canvas, i);      
        }, 10);
        return(() => clearInterval(intervalId));
    }, [currentFunctionID]);

    return (
        <div className="app">
            <h3>{currentFunctionID}</h3>
            <div className="display">
                <button onClick={()=>navButtonClicked(-1)}>Previous</button>
                <canvas id="canvas" width="300" height="300" />
                <button onClick={()=>navButtonClicked(1)}>Next</button>
            </div>
            <h3>Function #{currentFunctionID}</h3>
        </div>
    );
};

export default App;
