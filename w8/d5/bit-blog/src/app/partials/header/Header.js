import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand offset-md-1"><h1>RND BLG</h1></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav offset-md-9" >
                        <Link to="/PostList" className="nav-item nav-link active">Home </Link>
                        <Link to="/authorList" className="nav-item nav-link active">Authors</Link>
                        <Link to="/newPostPage" className="nav-item nav-link active">New Post</Link>
                        <Link to="/about" className="nav-item nav-link active">About</Link>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Header;