import React, { Component } from 'react';
import Header from './partials/header/Header';
import Footer from './partials/footer/Footer';
import About from './about/About'
import Post from './post/Post'
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import Author from './author/Author';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          {/* <Route path="/Home" component={Home} />
          <Redirect exact from="/" to="/Home" />
          <Route path="/Authors" component={AuthorList} /> */}
          <Route path="/Post" component={Post} />
          <Route path="/About" component={About} />
          <Route path="/Author" component={Author} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;
