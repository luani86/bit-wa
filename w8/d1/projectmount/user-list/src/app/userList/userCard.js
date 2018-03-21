import React from "react";
import FormatDate from "./../../shared/utils/formatDate"
import FormatEmail from "./../../shared/utils/formatEmail"

const UserCard = (props) => {
    return (
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img src={props.item.photo}/>
              <span className="card-title">{props.item.firstName}</span>
            </div>
            <div className="card-content">
              <p>{props.item.email}<br/>
                    {"Date of birth: " + props.item.bDay}</p>
            </div>
          </div>
        </div>
    );
}

export default UserCard;