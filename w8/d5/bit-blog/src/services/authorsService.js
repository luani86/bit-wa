import Author from "../entities/Author"    
import Post from "../entities/Post";

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

    fetchAuthorsById(authorId) {
        return fetch("https://jsonplaceholder.typicode.com/users/" + authorId)
            .then((response) => {
                return response.json()
            })
                .then((singleAuthor) => {
                    return new Author(singleAuthor)
                })
    }


    fetchAuthorsForMorePosts(authorId) {
        return fetch("https://jsonplaceholder.typicode.com/posts/?userId=" + authorId)
            .then((response) => {
                return response.json();
            })
            .then((posts) => {
                return posts.map(post => {
                    return new Post(post);
                })
            })
    }
}

export const authorsService = new AuthorsService();