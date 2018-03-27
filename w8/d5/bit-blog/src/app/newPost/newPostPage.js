import React, { Component } from 'react';
import { postsService } from '../../services/postsService';
import BackBtn from '../partials/BackBtn';
import FwdBtn from '../partials/FwdBtn';

class NewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: ""
        };
    }

    handleTitleChange = (event) => {
        this.setState({title: event.target.value});
    }

    handleContentChange = (event) => {
        this.setState({content: event.target.value})
    }

    submit = () => {
        postsService.submitPost({
            title: this.state.title,
            descr: this.state.content
        })
    }


    render() {
        return (
            <div>
                <BackBtn/>
                <FwdBtn/>
                <h1>NEW POST</h1>
                <form >
                <h5>Title</h5>
                    <input type="text" onChange={this.handleTitleChange} value={this.state.title} placeholder="Post title" />
                <h5>Content</h5>
                    <textarea onChange={this.handleContentChange} value={this.state.content} />
                    <br/>
                    <input type="button" value="Save" onClick={this.submit}/>
                    <input type="reset" value="Cancel"/>
                </form>
            </div>
        );
    }
}



export default NewPost;