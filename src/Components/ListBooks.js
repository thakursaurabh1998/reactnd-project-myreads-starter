import React, { Component } from "react";
import { Link } from "react-router-dom";
import Bookshelf from "./Bookshelf";
import PropTypes from "prop-types";

class ListBooks extends Component {
  static propTypes = {
    onShelfChange: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
  };

  render() {
    const { onShelfChange, books } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf
              onShelfChange={onShelfChange}
              heading={"Currently Reading"}
              books={books.currentlyReading}
            />
            <Bookshelf
              onShelfChange={onShelfChange}
              heading={"Want ToRead"}
              books={books.wantToRead}
            />
            <Bookshelf
              onShelfChange={onShelfChange}
              heading={"Read"}
              books={books.read}
            />
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
