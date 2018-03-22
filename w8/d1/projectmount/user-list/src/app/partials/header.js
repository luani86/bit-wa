import React from "react";
import userGrid from "../partials/header"
import { Link } from "react-router-dom";

// import eventOne from "../shared/utils/eventOne"

const Header = (props) => {
    return (<div>
    <nav>
    <div className="nav-wrapper">
                     
      <a href="#!" className="brand-logo">BIT Persons</a>
      <ul className="right hide-on-med-and-down">
      
      <li><Link to='/About'>About</Link></li>
      <li><a onClick={props.handleChange}>
      <i className="material-icons">{ props.isGrid ? "view_list" : "view_module"}</i>
      </a></li>
        <li><a onClick={props.refresh}><i className="material-icons">refresh</i></a></li>
      </ul>
    </div>
  </nav>
   <nav>
     { props.isLoading ? "" :    (<div className="nav-wrapper">
     <form>
       <div className="input-field">
         <input id="search" type="search" required onChange={props.search} value={props.searchString}/>
         <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
         <i className="material-icons">close</i>
       </div>
     </form>
    </div> )}

 </nav>
</div>
  )
};

export default Header;

