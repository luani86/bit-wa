import React from "react";
import FormatDate from "./../../shared/utils/formatDate"
import FormatEmail from "./../../shared/utils/formatEmail"

const UserCard = (props) => {
  const bgStyle = props.item.gender === 'female' ? 'rgb(252, 126, 214)' : 'rgb(95, 95, 248)'; // promena boje pozadine
    return (
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img src={props.item.photo}/>
              <span className="card-title">{props.item.fullName}</span>
            </div>
            <div className="card-content" style={{backgroundColor: bgStyle}}>
              <p>{props.item.email}<br/>
                    {"Date of birth: " + props.item.bDay}</p>
            </div>
          </div>
        </div>
    );
}

export default UserCard;