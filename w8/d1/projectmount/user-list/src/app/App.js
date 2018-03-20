import React, { Component } from 'react';
import usersData from '../entities/users';
import Header from './partials/header';
import Footer from './partials/footer';
import UserList from './userList/userList';
import {userService} from './../services/UserService';
import UserGrid from "./userList/userGrid";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: false }
  }

  handleChange = (event) => {
    this.setState((prevState, props) => {
      return {selected: !prevState.selected}
    });
  }

  render() {
    return (
          <div>
            <Header handleChange={this.handleChange}/>
            {(this.state.selected) ? <UserList items={usersData}/> : <UserGrid items={usersData}/>}
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