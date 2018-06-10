import React, { Component } from "react";
import { Link } from "react-router-dom";
import Bookshelf from './Bookshelf'

class ListBooks extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf heading={"Currently Reading"} shelf={"currentlyReading"}/>
            <Bookshelf heading={"Want To Read"} shelf={"wantToRead"}/>
            <Bookshelf heading={"Read"} shelf={"read"}/>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default ListBooks;
