import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand offset-md-1">Bit Blog</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav offset-md-9" >
                        <Link to="/home" className="nav-item nav-link active">Home </Link>
                        <Link to="/authors" className="nav-item nav-link active">Authors</Link>
                        <Link to="/about" className="nav-item nav-link active">About</Link>
                        <Link to="/post" className="nav-item nav-link active">Post</Link>
                        <Link to="/author" className="nav-item nav-link active">Author</Link>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Header;