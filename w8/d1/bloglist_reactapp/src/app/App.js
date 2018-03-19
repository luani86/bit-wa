import React from 'react';
import './App.css';
import BlogList from './blogPosts/BlogList';
import Header from './partials/Header';
import Footer from './partials/Footer';
import postsData from '../postsData';

const App = (props) => {
    return (
    <div>
      <Header/>
      <BlogList items={postsData}/>
      <Footer/>
    </div>
    )
}


export default App;

