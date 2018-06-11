import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from "../BooksAPI";
import PropTypes from 'prop-types';

class SearchPage extends Component {
  state = {
    query: "",
    books: []
  };

  static propTypes = {
    onAdd: PropTypes.func.isRequired
  }

  searchRequest(query) {
    this.setState({ query });

    if (query.length === 0) this.setState({ books: [] });
    if (query)
      BooksAPI.search(query)
        .then(books => {
          if ("error" in books) return [];
          return books.map(book => {
            if (!("authors" in book)) {
              book["authors"] = ["Unknown"];
            }
            if (!("imageLinks" in book)) {
              book["imageLinks"] = {
                thumbnail:
                  "http://books.google.com/books/content?id=U6p0_xrbs4kC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
              };
            }
            return book;
          });
        })
        .then(books => {
          this.setState({ books });
        });
  }

  render() {
    const { onAdd } = this.props;
    const { query, books } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              onChange={event => this.searchRequest(event.target.value)}
              type="text"
              value={query}
              placeholder="Search by title or author"
            />
          </div>
        </div>
        {books.length === 0 &&
          query.length === 0 && (
            <h1
              style={{
                position: "absolute",
                top: 50,
                bottom: 50,
                right: 50,
                left: 50
              }}
            >
              Search your book!
            </h1>
          )}
        {books.length === 0 &&
          query.length !== 0 && (
            <h1
              style={{
                position: "absolute",
                top: 50,
                bottom: 50,
                right: 50,
                left: 50
              }}
            >
              No books found!
            </h1>
          )}
        <div className="search-books-results">
          <ol className="books-grid">
            {books.map(book => (
              <li key={book.id}>
                <Book
                  onShelfChange={(e)=>onAdd(book,e)}
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

export default SearchPage;
