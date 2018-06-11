import React, { Component } from "react";
import Book from "./Book";
import PropTypes from 'prop-types';

class Bookshelf extends Component {
  static propTypes = {
    heading: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
  }

  render() {
    const { heading, books, onShelfChange } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{heading}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(book => (
              <li key={book.id}>
                <Book 
                  onShelfChange={(e)=>onShelfChange(book,e)}
                  bookTitle={book.title} 
                  bookAuthor={book.authors}
                  bookCover={book.imageLinks.thumbnail}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Bookshelf;
