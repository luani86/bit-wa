import React, { Component } from 'react';
import { Link } from "react-router-dom";
import BackBtn from '../partials/BackBtn';

const Post = () => {
    return (
        <div>
            <BackBtn/>
            <h1>Post title 1</h1>
            <Link to="/author" className="nav-item nav-link active">Author Name</Link>
            <p>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            </p>
            <hr/>
            <h3>3 more posts from same author</h3>
            <ul>
                <li><Link to="/post" className="nav-item nav-link active">Title 10 - velit, vulputate</Link></li>
                <li><Link to="/post" className="nav-item nav-link active">Title 10 - velit, vulputate</Link></li>
                <li><Link to="/post" className="nav-item nav-link active">Title 10 - velit, vulputate</Link></li>
            </ul>
        </div>
    )
}

export default Post;

