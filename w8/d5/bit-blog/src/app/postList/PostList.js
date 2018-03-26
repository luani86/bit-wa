import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { postsService } from '../../services/postsService'

class PostList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount = () => {
        postsService.fetchPosts()
            .then((collectionOfPosts) => this.setState({posts: collectionOfPosts}))

    }

    render = () => {
        return (
            <div>
                <h2>POSTS</h2>

                {this.state.posts.map((post) => (
                    <div key={post.id}>
                        <Link to={"/post/" + post.id} className="nav-item nav-link active"><h3>{post.title}></h3></Link>
                        <p>{post.postContent}</p>
                        <hr/>
                    </div>
                ))}
            </div>
        )
    }
}

export default PostList;