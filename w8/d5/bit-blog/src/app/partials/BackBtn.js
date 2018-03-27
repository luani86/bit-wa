import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./BackBtn.css";

const BackBtn = () => {
    const goBack = () => {
        window.history.back();
    }
    
    return (
        <div>
            <p onClick={goBack} className="backBtn">&lt;Back</p>
        </div>
    )
}

export default BackBtn;


