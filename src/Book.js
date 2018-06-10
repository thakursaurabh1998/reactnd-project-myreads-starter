import React, { Component } from "react";
import PropTypes from 'prop-types';

class Book extends Component {
  static propTypes = {
    bookTitle: PropTypes.string.isRequired,
    bookAuthor: PropTypes.array.isRequired,
    bookCover: PropTypes.string.isRequired,
  }
  render() {
    const { bookCover, bookAuthor, bookTitle } = this.props;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:
                `url("${bookCover}")`
            }}
          />
          <div className="book-shelf-changer">
            <select>
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{bookTitle}</div>
        <div className="book-authors">{bookAuthor.map((author) => (
          <div key={author}>{author}</div>
        ))}</div>
      </div>
    );
  }
}


export default Book;