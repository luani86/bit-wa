import User from "../entities/User"
class UserService {
    fetchUsers() {
        return fetch("https://randomuser.me/api/?results=15")
        .then((response) => {
            return response.json()
        })
        .then ((resultResponse) => {
            const userList = resultResponse.results
            console.log(userList)
            return userList;
        })
        .then((usersFromApi) => {
            return usersFromApi.map((user) => {
                return new User(user);
            })
        })
    }
}
export const userService = new UserService();