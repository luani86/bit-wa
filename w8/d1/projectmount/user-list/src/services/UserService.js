class UserService {
    fetchUsers() {
        return fetch("https://randomuser.me/api/?results=15")
        .then((response) => {
            return response.json()
        })
        .then ((result) => {
            const userList = result.results
            console.log(userList)
            return userList
        })
    }
}
export const userService = new UserService();