// fechPosts
// create Posts objects for each post in response
// return those posts

import Post from "../entities/Post"

class PostsService {
    fetchPosts() {
        return fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                return response.json()
            })
            .then((results) => {
                return results.map((post) => {
                    return new Post(post);
                })
            })
    }

    fetchPostsById(postId) {
        return fetch("https://jsonplaceholder.typicode.com/posts/" + postId)
            .then((response) => {
                return response.json();
            })
            .then((singlePost) => {
                return new Post(singlePost);
            });
    }

    submitPost(newPost) {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                userId: 1,
                title: newPost.title,
                body: newPost.descr
            })
        });
    }

    
}
export const postsService = new PostsService();