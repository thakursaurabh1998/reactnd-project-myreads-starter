import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";
import PropTypes from 'prop-types';

class Bookshelf extends Component {
  static propTypes = {
    heading: PropTypes.string.isRequired,
    shelf: PropTypes.string.isRequired,
  }

  state = {
    wantToRead: [],
    read: [],
    currentlyReading: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(data => {
      this.setState({
        wantToRead: data.filter(a=>a.shelf==='wantToRead'),
        read: data.filter(a=>a.shelf==='read'),
        currentlyReading: data.filter(a=>a.shelf==='currentlyReading'),
      });
    });
  }

  render() {
    const { heading, shelf } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{heading}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.state[shelf].map(book => (
              <li key={book.title}>
                <Book 
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
