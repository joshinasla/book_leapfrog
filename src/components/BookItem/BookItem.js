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
    // const singleItem = this.state.singleItem;

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
          {/* {<h2>{bookDetail.selfLink}</h2>}
            {<h2>{bookDetail.volumeInfo.title}</h2>} */}
          {/* <h2>{bookDe.id}</h2>
        <h1>{this.state.singleItem.selfLink}</h1> */}
          {/* <h1>
          {Object.keys(this.state.singleItem.volumeInfo).map((key) => {
            return <li key={key}>{}</li>;
          })}
        </h1> */}
          {/* <div className="container">
          <h2>{bookDetail.volumeInfo.title}</h2>
          <p>{bookDetail.volumeInfo.author}</p>
*/}
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
// const mapDispatchToProps = (dispatch) => {
//   return {
//     updateBookDetails: (bookDetails) =>
//       dispatch(updateBookDetails(bookDetails)),
//   };
// };
// const mapStateToProps = (state) => {
//   console.log("this is inside props", state.active.bookDetails);
//   return {
//     bookDetail: state.activeBook.bookDetails,
//   };
// };
// const ReduxBookItem = connect(mapStateToProps, mapDispatchToProps)(BookItem);
export default BookItem;
