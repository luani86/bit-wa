import React, { Component } from 'react';
import { Link } from "react-router-dom";
import BackBtn from '../partials/BackBtn';

const Author = () => {
    return (
        <div>
        <BackBtn/>
         <div className = "row">
         <BackBtn/>
         <div class="col-3.5 offset-1 ">
                <img src="http://via.placeholder.com/350x250"/>
            </div>
            <div class="col-6 ">
                <h1>Name Surname</h1>
                <p>username:my_cool_username</p>
                <p>email:my_cool@mail.com</p>
                <p>phone: 1-770-736-8031</p>
            </div>
        </div>




        </div>
    )
}

export default Author;