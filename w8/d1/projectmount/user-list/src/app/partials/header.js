import React from "react";
import userGrid from "../partials/header"
// import eventOne from "../shared/utils/eventOne"

const Header = (props) => {
    return (
    <div>
        
        <nav>
        <div className="nav-wrapper">
          <a href="" className="brand-logo">Bit People</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a onClick={props.handleChange}>hahahaha</a></li>
            <li><a href="">sass <span className="new badge">4</span></a></li>
            <li><a href="">sass</a></li>
          </ul>
        </div>
      </nav>
    </div>
    )
};

export default Header;