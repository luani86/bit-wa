import React, { Component } from 'react';

// import { Link } from "react-router-dom";

const EmptyPage = (props) => {
    return(
        <div>
            {/* <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">BIT Persons</a>
          <ul className="right hide-on-med-and-down">
          <li><Link to='/Home'>Home</Link></li>
          <li><a onClick={props.handleChange}>
          </a></li>
          </ul>
        </div>
      </nav> */}
      <i className="large material-icons">ac_unit</i>
            <h2>We couldn't find any people matching your search.</h2> 

        </div>
    )
    
    }
    
    export default EmptyPage;