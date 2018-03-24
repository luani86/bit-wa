import Author from "../entities/Author"    

class AuthorsService {
    fetchAuthors() {
        return fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                return response.json();
            })
                .then((results) => {
                    return results.map((author) => {
                        return new Author(author);
                    })
                })
    }
}

export const authorsService = new AuthorsService();