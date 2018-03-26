import React, { Component } from 'react';
import Header from './partials/header/Header';
import Footer from './partials/footer/Footer';
import AuthorList from './authorList/AuthorList'
import About from './about/About'
import NewPost from './newPost/newPostPage'
import SinglePost from './post/SinglePost'
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import AuthorPage from './author/AuthorPage';
import PostList from './postList/PostList'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          {/* <Route path="/Home" component={Home} />
          <Redirect exact from="/" to="/Home" />
          <Route path="/Authors" component={AuthorList} /> */}
          <Route path="/Post/:postId" component={SinglePost} />
          <Route path="/About" component={About} />
          <Route path="/Author/:authorId" component={AuthorPage} />
          <Route path="/AuthorList" component={AuthorList} />
          <Route path="/PostList" component={PostList} />
          <Route path="/newPostPage" component={NewPost} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;
