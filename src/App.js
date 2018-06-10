import React from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import { Route } from 'react-router-dom';
import SearchPage from './SearchPage';
import ListBooks from './ListBooks';

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/search" render={() => (
          <SearchPage/>
        )}/>
        <Route exact path="/" render={() => (
          <ListBooks/>
        )}/>
      </div>
    )
  }
}

export default BooksApp;
