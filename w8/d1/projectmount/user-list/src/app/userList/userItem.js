import React from "react";
import PropTypes from "prop-types"


const UserItem = (props) => {
    return (<div>
        <p>{props.item.picture.thumbnail}</p>
        <p>{props.item.name.first}</p>
        <p>{props.item.email}</p>
        <p>{props.item.dob}</p>
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