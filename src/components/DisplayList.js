import React from "react";

import "./DisplayList.css";
import { updateBookShelf } from "../redux/action";

function DisplayList(props) {
  console.log("he", props.bookDetails);
  const books = props.bookDetails;
  const goToBookShelf = () => {
    this.props.updateBookShelf(books.id);
  };
  return (
    <div className="wrapper">
      {books.map((book) => {
        return (
          <div className="container">
            <div className="cover ">
              <div className="clearfix header">
                <div className="img-box">
                  <img
                    src={book.volumeInfo.imageLinks.thumbnail}
                    width="100px"
                    alt="book cover "
                  />
                </div>
                <div className="content">
                  <p className="title">{book.volumeInfo.title}</p>
                  <p className="author">{book.volumeInfo.authors}</p>
                  <p className="categories">{book.volumeInfo.categories}</p>
                </div>
              </div>

              <div className="popover-wrapper">
                <a href="#">
                  <h5 className="popover-title">Description</h5>
                </a>
                <div className="popover-content">
                  <p className="popover-description">
                    {book.volumeInfo.description}
                  </p>
                </div>
              </div>
              <div>
                <button onClick={goToBookShelf}>My Book</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  console.log("dispatch");
  return {
    updateBookShelf: (id) => dispatch(updateBookShelf),
  };
};
export default DisplayList;
