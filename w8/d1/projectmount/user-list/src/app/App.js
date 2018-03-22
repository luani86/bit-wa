import React, { Component } from 'react';
import usersData from '../entities/users';
import Footer from './partials/footer';
import {Switch, Route, Redirect} from "react-router-dom"
import Home from './../entities/home';
import About from './../entities/about';
import EmptyPage from './../entities/emptyPage';

class App extends Component{

  render() {
    return (
          <div>
            <Switch>
              <Route exact path="/home" component={Home}/>
              <Redirect exact from="/" to="/home"/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/emptyPage" component={EmptyPage}/>
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