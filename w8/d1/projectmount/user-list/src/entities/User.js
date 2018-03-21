import React from "react";
import FormatDate from "../shared/utils/formatDate";
import FormatEmail from "../shared/utils/formatEmail";
class User {
    constructor(user) {
        this.id = user.login.username;
        this.photo = user.picture.large;
         this.firstName = user.name.firstName;
         this.email = FormatEmail(user.email);
         this.bDay = FormatDate(user.dob); 
         this.smallPhoto = user.picture.thumbnail;
         this.lastName = user.name.last;   
}
}

export default User;
