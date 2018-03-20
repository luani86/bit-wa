import React from "react";
import FormatDate from "./../../shared/utils/formatDate"
import FormatEmail from "./../../shared/utils/formatEmail"

const UserCard = (props) => {
    return (
        <div class="col s12 m7">
          <div class="card">
            <div class="card-image">
              <img src={props.item.picture.large}/>
              <span class="card-title">{props.item.name.first}</span>
            </div>
            <div class="card-content">
              <p>{FormatEmail(props.item.email)}<br/>
                    {"Date of birth: " + FormatDate(props.item.dob)}</p>
            </div>
          </div>
        </div>
    );
}

export default UserCard;