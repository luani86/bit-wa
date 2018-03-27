import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {authorsService} from '../../services/authorsService';
import BackBtn from '../partials/BackBtn';
import FwdBtn from '../partials/FwdBtn';
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
            <BackBtn/>
            <FwdBtn/>
            <h2>Authors ({this.state.authors.length})</h2>

            {this.state.authors.map((author) => (
                <div key={author.id}>
                    <Link to={"/author/" + author.id} className="nav-item nav-link active"><h3>{author.name}</h3></Link>
                    <hr/>
                </div>
            ))}
        </div>
    )
} 
}

export default AuthorList;