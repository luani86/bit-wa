import React from "react";
import userGrid from "../partials/header"
// import eventOne from "../shared/utils/eventOne"

const Header = (props) => {
    return (
    <div>
        
        <nav>
        <div class="nav-wrapper">
          <a href="" class="brand-logo">Bit People</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a onClick={props.handleChange}>hahahaha</a></li>
            <li><a href="">sass <span class="new badge">4</span></a></li>
            <li><a href="">sass</a></li>
          </ul>
        </div>
      </nav>
    </div>
    )
};

export default Header;