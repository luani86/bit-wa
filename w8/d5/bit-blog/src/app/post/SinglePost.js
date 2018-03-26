import React, { Component } from 'react';
import { Link } from "react-router-dom";
import BackBtn from '../partials/BackBtn';
import { postsService } from '../../services/postsService';
import { authorsService } from '../../services/authorsService';

class SinglePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
            postsByAuthor: [],
            name: "",
            userId: 0
        }
    }

    load(id){
        postsService.fetchPostsById(id)
            .then((singlePostContent) => {
                this.setState({ title: singlePostContent.title, body: singlePostContent.postContent, userId: singlePostContent.userId });

                authorsService.fetchAuthorsForMorePosts(singlePostContent.userId)
                    .then((collectionOfPostsByAuthor) => this.setState({postsByAuthor: collectionOfPostsByAuthor.slice(0, 3)}));

                authorsService.fetchAuthorsById(singlePostContent.userId)
                    .then((author)=>{
                        this.setState({name: author.name})
                    })
                }
            )
    }

    componentDidMount = () => {
        this.load(this.props.match.params.postId);
    }

    componentWillReceiveProps(nextProps){
        this.load(nextProps.match.params.postId);
    }

    render = () => {
        console.log(this.state.postsByAuthor)
        return (
            <div>
                <h3>{this.state.title}</h3>
                <Link to={`/author/${this.state.userId}`} className="nav-item nav-link active"><h3>{this.state.name}</h3></Link>
                <p>{this.state.body}</p>
                <h4>3 more posts from same author</h4>
                {/* <Link to={`/post/${}`} className="nav-item nav-link active">Title: {this.state.title.substring(0, 15)}</Link> */}
                {this.state.postsByAuthor.map((postByAuthor) => {
                   
                    return (
                    <div key={postByAuthor.id}>
                        <Link to={"/post/" + postByAuthor.id} className="nav-item nav-link active">Title: {postByAuthor.title.substring(0, 15)}</Link>
                    </div>)
                    
                })}

            </div>
        )
    }
}

export default SinglePost;

