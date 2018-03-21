import React from "react";
import PropTypes from "prop-types"
import FormatDate from "./../../shared/utils/formatDate"
import FormatEmail from "./../../shared/utils/formatEmail"

const UserItem = (props) => {
console.log('------------------------------------');
console.log(props);
console.log('------------------------------------');
    return (<div>
        <ul className="collection">
      
        <li className="collection-item avatar">
        <img className="material-icons circle" src= {props.item.smallPhoto}></img>
        <span className="title"></span>
        <p>{props.item.firstName}<br/>
        {props.item.email}<br/>
        {"Date of birth: " + props.item.bDay}
        </p>
        <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
      </li>
      
    </ul>
    

    


        {/* <p>{props.item.picture.thumbnail}</p>
        <p>{props.item.name.first}</p>
        <p>{props.item.email}</p>
        <p>{props.item.dob}</p> */}
    </div>)
};


UserItem.defaultProps = {
    name: "x",
    mail: "podnaslov",
    dateOfBirth: "neki string"
}
UserItem.propTypes = {
    item: PropTypes.object.isRequired
  }
export default UserItem;