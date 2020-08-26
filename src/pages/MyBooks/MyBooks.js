import React, { Component } from "react";
import { connect } from "react-redux";

import NavBar from "../../components/NavBar/NavBar";
import BookItem from "../../components/BookItem/BookItem";
import "../../components/BookItem/BookItem.css";

class MyBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          book: "Flowers and their associations",
          author: "Anne Pratt",
          saved: true,
          read: false,
        },
        {
          id: 2,
          book: "The Language of Flowers",
          author: "Frederic Shoberl",
          saved: false,
          read: true,
        },
        {
          id: 3,
          book: "A Brighter Sun",
          author: "Liz Gerschel",
          saved: false,
          read: false,
        },
        {
          id: 4,
          book: "Sun Yat-sen",
          author: "Marie-Claire Bergère",
          saved: false,
          read: false,
        },
        {
          id: 5,
          book: "The Moon in the Water",
          author: "Gwenn Boardman Petersen",
          saved: false,
          read: false,
        },
        {
          id: 6,
          book: "Observing the Moon",
          author: "Peter Wlasuk",
          saved: false,
          read: false,
        },
        {
          id: 7,
          book: "The Hour of the Star",
          author: "Clarice Lispector",
          saved: false,
          read: false,
        },
      ],
    };
  }
  render() {
    console.log(this.props.myBooks);
    const myBooks = this.props.myBooks;
    // const id = myBooks.id;
    return (
      <div className="main">
        {myBooks.map((book) => (
          <BookItem book={book} />
        ))}
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
