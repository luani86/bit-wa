import formatName from "./formatName";

formatNames = (users) => {
    const newUsers = users.map(user => {
        return {...user, name: formatName(user.name)}
    });

    return newUsers;
}

export default formatNames;

user = {
    name: "luka"
}

userTwo = {
    name: "Luka"
}