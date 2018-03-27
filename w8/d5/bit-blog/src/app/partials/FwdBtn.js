import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./FwdBtn.css";

const FwdBtn = () => {
    const goForward = () => {
        window.history.forward();
    }
    
    return (
        <div>
            <p onClick={goForward} className="fwdBtn">Forward&gt;</p>
        </div>
    )
}

export default FwdBtn;

