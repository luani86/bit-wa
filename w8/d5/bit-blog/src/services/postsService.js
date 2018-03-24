// fechPosts
    // create Posts objects for each post in response
    // return those posts

import Post from "../entities/Post"    

class PostsService {
    fetchPosts() {
        return fetch ("https://jsonplaceholder.typicode.com/posts")
        .then((response) =>{
            return response.json()
        })
        .then ((results)=>{
            return results.map((post)=>{
                return new Post(post);
            })
        })
    }
}
export const postsService = new PostsService();