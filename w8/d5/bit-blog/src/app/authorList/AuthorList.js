import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {authorsService} from '../../services/authorsService';
class AuthorList extends Component {
constructor(props) {
    super(props);
    this.state = {
        authors: []
    };
}
componentDidMount = () => {
    authorsService.fetchAuthors()
        .then((collectionOfAuthors) => this.setState({authors: collectionOfAuthors})) 
}

render = () => {
    return (
        <div>
            <h2>Authors</h2>

            {this.state.authors.map((author) => (
                <div key={author.id}>
                    <Link to="/author" className="nav-item nav-link active"><h3>{author.name}</h3></Link>
                    <hr/>
                </div>
            ))}
        </div>
    )
} 
}

export default AuthorList;