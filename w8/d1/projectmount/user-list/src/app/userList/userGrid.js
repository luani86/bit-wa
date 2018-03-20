import React from "react";
import UserCard from './userCard';

const UserGrid = (props) => {
    return(
        <div class="row">
        {props.items.map((e) => <UserCard item={e} key={e.id}/>)}
        </div>
    )
}

export default UserGrid;