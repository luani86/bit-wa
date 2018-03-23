import React, { Component } from 'react';
import { Link } from "react-router-dom";

const BackBtn = () => {
    return (
        <div>
            <Link to="/about" className="nav-item nav-link active">&lt;Back</Link>
            </div>
    )
}

export default BackBtn;


