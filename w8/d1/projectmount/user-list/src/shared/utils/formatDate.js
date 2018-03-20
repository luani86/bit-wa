import React from "react";
const FormatDate = (date) => {
    let shortDate = date.slice(0, 10);

    return shortDate[5] + shortDate[6] + " " + shortDate[8] + shortDate[9] + " " + shortDate[0] + shortDate[1] + shortDate[2] + shortDate[3];
}
console.log(FormatDate("1989-06-18 16:53:29"))

export default FormatDate;