import React, { Component } from "react";
import "./styles/ending.css";

function restart(){
    document.location.href = "/main";
    //설영아 여기서 변경해줘
}


function Endview(){
    return(
        <div className="ending">
            <button onClick = {restart}>RESTART</button>
        </div>
    );
}

export default Endview;