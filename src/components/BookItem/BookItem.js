import React, { Component } from "react";
import { AiFillCheckCircle } from "react-icons/ai";

import { updateBookDetails } from "../../redux/action";
import "./BookItem.css";
import { connect } from "react-redux";

class BookItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singleItem: [],
      read: false,
    };
  }
  // componentWillMount() {
  //   const book = this.props.book;
  //   const bookDetailUrl = `https://www.googleapis.com/books/v1/volumes/${bookID}`;
  //   fetch(bookDetailUrl)
  //     .then((res) => {
  //       console.log({ res });
  //       return res.json();
  //     })
  //     .then((bookDetails) => {
  //       console.log({ bookDetails });
  //       this.props.updateBookDetails(bookDetails);
  //       this.setState({
  //         singleItem: bookDetails,
  //       });
  //     });
  // }

  readBtnChange = () => {
    this.setState({
      read: !this.state.read,
    });
  };
  render() {
    const bookDetail = this.props.book;

    console.log("THISis inside render", bookDetail);
    return (
      <li id={bookDetail.id} className="list-book">
        <div className="container">
          <a href={bookDetail.previewLink} className="content-text">
            <div className="cover">
              <div className="clearfix header">
                <div className="img-box">
                  <img
                    src={bookDetail.volumeInfo.imageLinks.thumbnail}
                    width="100px"
                    alt="book cover"
                  ></img>
                </div>
                <div className="content">
                  <p className="title">{bookDetail.volumeInfo.title}</p>
                  <p className="author">{bookDetail.volumeInfo.authors}</p>
                  <p className="categories">
                    {bookDetail.volumeInfo.categories}
                  </p>
                </div>
              </div>
            </div>
          </a>

          <div className="icons">
            <div>
              <AiFillCheckCircle aria-hidden="true" />
              <button className="read-btn" onClick={this.readBtnChange}>
                <p>{this.state.read ? "Finished" : "Reading"}</p>
              </button>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default BookItem;
