import React, { Component } from "react";
import { connect } from "react-redux";

import BookItem from "../../components/BookItem/BookItem";
import "../../components/BookItem/BookItem.css";

class MyBooks extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   iflag: true,
    // };
  }
  // hi = () => {
  //   this.setState({
  //     iflag: false,
  //   });
  //   console.log(this.state.flag, "hi");
  // };
  render() {
    console.log("hi", this.props.myBooks);
    const myBooks = this.props.myBooks;
    // if (this.props.mybooks === undefined) {
    //   this.hi();
    // }
    return (
      <div className="main">
        <h1> YOur List</h1>
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
