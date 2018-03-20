import React from "react";
const FormatEmail = (email) => {
    let firstPart = email.slice(0, 3);
    let secondPart = email.slice(email.length-14, email.length);

    return firstPart + "..." + secondPart;
}
console.log(FormatEmail("oliver.lewis@example.com"))

export default FormatEmail;