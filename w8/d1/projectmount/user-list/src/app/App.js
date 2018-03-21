import React, { Component } from 'react';
import usersData from '../entities/users';
import Footer from './partials/footer';
// import UserList from './userList/userList';
// import {userService} from './../services/UserService';
// import UserGrid from "./userList/userGrid"
import {Switch, Route, Redirect} from "react-router-dom"
import Home from './../entities/home';
import About from './../entities/about';

class App extends Component{

  render() {
    return (
          <div>
            <Switch>
              <Route exact path="/home" component={Home}/>
              <Route exact path="/about" component={About}/>
            </Switch>
            <Footer/>
          </div>
          )
  }
}

// const App = (props) => {
//     return (
//     <div>
//       <Header/>
//       <UserList items={usersData}/>
//       <Footer/>
//     </div>
//     )
// }

export default App;