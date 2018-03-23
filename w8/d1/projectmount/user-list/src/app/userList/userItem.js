import React from "react";
import PropTypes from "prop-types";
import FormatDate from "./../../shared/utils/formatDate";
import FormatEmail from "./../../shared/utils/formatEmail";

const UserItem = (props) => {
    const bgStyle = props.item.gender === 'female' ? 'rgb(252, 126, 214)' : 'rgb(95, 95, 248)'; // promena boje pozadine
    return (<div>
            <ul className="collection">
                <li className="collection-item avatar" style={{backgroundColor: bgStyle}}> 
                    <img className="material-icons circle" src= {props.item.smallPhoto}></img>
                    <span className="title"></span>
                    <p>{props.item.fullName}<br/>
                    {<i className="small material-icons">email</i>}
                    {props.item.email}<br/>
                    {<i className="small material-icons">cake</i>}
                    {"Date of birth: " + props.item.bDay}
                    </p>
                </li>
            </ul>
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