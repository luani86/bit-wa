import React, { Component } from 'react';
import usersData from '../entities/users';
import Header from './partials/header';
import Footer from './partials/footer';
import UserList from './userList/userList';
import {userService} from './../services/UserService';
import UserGrid from "./userList/userGrid"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: false, users: [] }
  }

  handleChange = (event) => {
    this.setState((prevState, props) => {
      return {selected: !prevState.selected}
    });
  }

  componentDidMount () {
    userService.fetchUsers()
    .then((fetchedusers) => {
      this.setState({
        users: fetchedusers
      })
    })
  }

  render() {
    return (
          <div>
            <Header handleChange={this.handleChange} isGrid={this.state.selected}/>
            {(this.state.selected) ? <UserGrid items={this.state.users}/> : <UserList items={this.state.users}/>}
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