import React from "react";
import userGrid from "../partials/header"
// import eventOne from "../shared/utils/eventOne"

const Header = (props) => {
    return (
    <nav>
    <div className="nav-wrapper">
      <a href="#!" className="brand-logo">BIT Persons</a>
      <ul className="right hide-on-med-and-down">
      <li><a onClick={props.handleChange}>
      <i className="material-icons">{ props.isGrid ? "view_list" : "view_module"}</i>
      </a></li>
        <li><a href="collapsible.html"><i className="material-icons">refresh</i></a></li>
      </ul>
    </div>
  </nav>
  )
};

export default Header;

