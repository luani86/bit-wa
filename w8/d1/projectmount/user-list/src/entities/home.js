import React from 'react';
import usersData from './users';
import UserList from './../app/userList/userList';
import {userService} from './../services/UserService';
import UserGrid from "./../app/userList/userGrid";
import Header from "./../app/partials/header";

class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          selected: false,
          users: []
        }
    }
  
    handleChange = (event) => {
      this.setState((prevState, props) => {
        return {selected: !prevState.selected}
      });
    }
  
    refresh = (event) => {
        this.loadUsers();
    }

    loadUsers(){
        userService.fetchUsers()
      .then((fetchedusers) => {
        this.setState({
          users: fetchedusers
        })
      })
    }
  
    componentDidMount () {
      this.loadUsers();
    }

render() {
    return (
        <div>
              <Header handleChange={this.handleChange} isGrid={this.state.selected} refresh ={this.refresh}/>
          {(this.state.selected) ? <UserGrid items={this.state.users}/> : <UserList items={this.state.users}/>}
        </div>
        )
}
}
export default Home;
  
