import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Route } from "react-router-dom";
import SearchPage from "./Components/SearchPage";
import ListBooks from "./Components/ListBooks";

class BooksApp extends React.Component {
  state = {
    books: {
      wantToRead: [],
      read: [],
      currentlyReading: []
    }
  };

  shelfChange = (book, e) => {
    let books = { ...this.state.books };
    if('shelf' in book){
      const oldShelf = book.shelf;
      const index = books[oldShelf].indexOf(book);
      if (index !== -1) {
        books[oldShelf].splice(index, 1);
      }
    }
    if (e.target.value !== "none") {
      books[e.target.value].push(book);
      book.shelf = e.target.value;
    }

    BooksAPI.update(book, e.target.value);

    this.setState({ books });
  };

  componentDidMount() {
    BooksAPI.getAll().then(data => {
      this.setState({
        books: {
          wantToRead: data.filter(a => a.shelf === "wantToRead"),
          read: data.filter(a => a.shelf === "read"),
          currentlyReading: data.filter(a => a.shelf === "currentlyReading")
        }
      });
    });
  }

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/search"
          render={() => 
            <SearchPage
              onAdd={this.shelfChange} 
            />}
        />
        <Route
          exact
          path="/"
          render={() => (
            <ListBooks
              onShelfChange={this.shelfChange}
              books={this.state.books}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
