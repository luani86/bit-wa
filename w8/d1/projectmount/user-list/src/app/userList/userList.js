import React from "react";
import UserItem from './userItem';

const UserList = (props) => {
    return (
    <ul>
        {props.items.map((e) => <UserItem item={e} key={e.id}/>)}
    </ul>)
};

export default UserList;