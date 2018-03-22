import React from "react";
import FormatDate from "../shared/utils/formatDate";
import FormatEmail from "../shared/utils/formatEmail";
import formatName from "../shared/utils/formatName";
class User {
    constructor(user) {
        this.id = user.login.username;
        this.photo = user.picture.large;
         this.firstName = user.name.first;
         this.email = FormatEmail(user.email);
         this.bDay = FormatDate(user.dob); 
         this.smallPhoto = user.picture.thumbnail;
         this.lastName = user.name.last;   
         this.gender = user.gender;
         this.fullName = formatName(user.name.first + " " + user.name.last);
    }
}

export default User;
