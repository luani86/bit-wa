import React, { Component } from 'react';
import { Link } from "react-router-dom";
import BackBtn from '../partials/BackBtn';
import FwdBtn from '../partials/FwdBtn';
//import Author from '../../entities/Author';
import { authorsService } from '../../services/authorsService';

// const AuthorPage = () => {
//     return (
//         <div>
//         <BackBtn/>
//          <div className = "row">
//          <div className="col-3.5 offset-1 ">
//                 <img src="http://via.placeholder.com/350x250"/>
                
//             </div>
//             <div className="col-6 ">
//                 <h1>Name Surname</h1>
//                 <p>username:</p>
//                 <p>email:</p>
//                 <p>phone:</p> 
//             </div>

//             <div className = "row">
//             <div className="col-6 offset-1">
//                 <h1>Address</h1>
//                 <p>Street: <b>Bla Bla St</b></p>
//                 <p>City: <b>Gwenborough</b></p>
//                 <p>Zipcode: <b>Gwenborough</b></p>
//             </div>
//             <div className="col-3.5 offset-2">
//             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.4063624436412!2d20.469955315956657!3d44.813285479098624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7abb18b593a1%3A0xfcc748f82cb910b3!2sTakovska%2C+Beograd!5e0!3m2!1sen!2srs!4v1521823143208" width="350" height="250" frameborder="0" style={{border:"0"}} allowfullscreen></iframe>
//             </div> 
//             </div>
            
//             <div className = "row">
//             <div className="col-6 offset-1 ">
//                 <h1>Company</h1>
//                 <p>Name: <b>Gwenborough</b></p>
//                 <p>Slogan: <b>77068</b></p>
//         </div>
//         </div>
// </div>

//         </div>
//     )
// }

class AuthorPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            username: "",
            email: "",
            phone: "",
            street: "",
            city: "",
            zipcode: "",
            companyName: "" 
        }
    }

    componentDidMount = () => {
        authorsService.fetchAuthorsById(this.props.match.params.authorId)
            .then((singleAuthorContent) => this.setState({
                name: singleAuthorContent.name,
                username: singleAuthorContent.username,
                email: singleAuthorContent.email,
                phone: singleAuthorContent.phone,
                street: singleAuthorContent.street,
                city: singleAuthorContent.city,
                zipcode: singleAuthorContent.zipcode,
                companyName: singleAuthorContent.companyName
            }))
    }

    render = () => {
        return (
            <div>
                <BackBtn/>
                <FwdBtn/>

                <div className = "row">
         <div className="col-3.5 offset-1 ">
                <img src="http://via.placeholder.com/350x250"/>
                
            </div>
            <div className="col-6 ">
                <h1>{this.state.name}</h1>
                <p>username: {this.state.username}</p>
                <p>email: {this.state.email}</p>
                <p>phone: {this.state.phone}</p> 
            </div>

            <div className = "row">
            <div className="col-6 offset-1">
                <h1>Address</h1>
                <p>Street: <b>{this.state.street}</b></p>
                <p>City: <b>{this.state.city}</b></p>
                <p>Zipcode: <b>{this.state.zipcode}</b></p>
            </div>
            <div className="col-3.5 offset-2">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.4063624436412!2d20.469955315956657!3d44.813285479098624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7abb18b593a1%3A0xfcc748f82cb910b3!2sTakovska%2C+Beograd!5e0!3m2!1sen!2srs!4v1521823143208" width="350" height="250" frameBorder="0" style={{border:"0"}} allowFullScreen></iframe>
            </div> 
            </div>
            
            <div className = "row">
            <div className="col-6 offset-1 ">
                <h1>Company</h1>
                <p>Name: <b>{this.state.companyName}</b></p>
                <p>Slogan: <b>77068</b></p>
        </div>
        </div>
</div>

        </div>
           
        )
    }
}

export default AuthorPage;