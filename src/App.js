import React, {
    useEffect,
    useState
} from "react";
import "./App.css";


import {
    spiralOne,
    spiralTwo,
    rotatingString,
    worm
} from "./art";

const artFunctions = [spiralOne, spiralTwo, rotatingString, worm];
const artFunctionsNames = artFunctions.map(func => func.name);

const App = () => {
    const [currentFunctionID, setCurrentFunctionID] = useState(0);

    const navButtonClicked = (change) => {
        let newFunctionID = currentFunctionID + change;
        newFunctionID = newFunctionID % artFunctions.length;
        newFunctionID = newFunctionID < 0 ? artFunctions.length - 1 : newFunctionID;
        setCurrentFunctionID(newFunctionID);
    }

    useEffect(() => {
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        let i = 0;
        const intervalId = setInterval(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            i += 1;
            artFunctions[currentFunctionID](canvas, i);
        }, 10);
        return (() => clearInterval(intervalId));
    }, [currentFunctionID]);

    return ( <
        div className = "app" >
        <
        h3 > {
            artFunctionsNames[currentFunctionID]
        } < /h3> <
        div className = "display" >
        <
        button className = "nav-btn"
        onClick = {
            () => navButtonClicked(-1)
        } > Previous < /button> <
        canvas id = "canvas"
        width = "300"
        height = "300" / >
        <
        button className = "nav-btn"
        onClick = {
            () => navButtonClicked(1)
        } > Next < /button> <
        /div> <
        h3 > {
            currentFunctionID + 1
        }
        / {artFunctions.length} </h3 >
        <
        /div>
    );
};

export default App;