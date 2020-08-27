import React, { Component } from "react";
import { connect } from "react-redux";

import BookItem from "../../components/BookItem/BookItem";
import "../../components/BookItem/BookItem.css";

class MyBooks extends Component {
  render() {
    console.log("hi", this.props.myBooks);
    const myBooks = this.props.myBooks;

    return (
      <div className="main">
        <h1 className="your-list"> Your List</h1>
        {myBooks.map((book) => (
          <BookItem book={book} />
        ))}
        {myBooks.length === 0 && (
          <span className="no-book">No books available..</span>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("mapStateToProps", state.activeBook.books);
  return {
    myBooks: state.activeBook.bookID,
  };
};

const ReduxMyBooks = connect(mapStateToProps)(MyBooks);

export default ReduxMyBooks;
