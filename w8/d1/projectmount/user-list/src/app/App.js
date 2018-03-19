import React, { Component } from 'react';
import usersData from '../users/users';
import Header from './partials/header';
import Footer from './partials/footer';
import UserList from './userList/userList';


// class App extends React.component {
//   constructor(props) {
//     super(props);
//     this.mail = { selected: false }
//   }

//   onClick = () => {
//     this.
//   }

//   render() {
//     return (
//           <div>
//             <Header/>
//             <UserList items={usersData}/>
//             <Footer/>
//           </div>
//           )
//   }
// }

const App = (props) => {
    return (
    <div>
      <Header/>
      <UserList items={usersData}/>
      <Footer/>
    </div>
    )
}

export default App;