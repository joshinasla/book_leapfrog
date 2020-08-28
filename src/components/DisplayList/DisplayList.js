import React from "react";
import { connect } from "react-redux";

import { updateBookShelf } from "../../redux/action";
import "./DisplayList.css";
import bookcover from "../../asset/bookcover.jpg";

function DisplayList(props) {
  const books = props.bookDetails || [];

  return (
    <div className="wrapper">
      {books.map((book) => {
        return (
          <div className="container">
            <div className="cover ">
              <div className="clearfix header">
                <div className="img-box">
                  {book.volumeInfo.imageLinks &&
                  book.volumeInfo.imageLinks.thumbnail ? (
                    <img
                      src={book.volumeInfo.imageLinks.thumbnail}
                      width="100px"
                      alt="book cover "
                    />
                  ) : (
                    <img src={bookcover} width="100px" alt="book cover" />
                  )}
                </div>
                <div className="content">
                  {book.volumeInfo.title ? (
                    <p className="title">{book.volumeInfo.title}</p>
                  ) : (
                    <p className="title"></p>
                  )}
                  {book.volumeInfo.authors ? (
                    <p className="author">{book.volumeInfo.authors}</p>
                  ) : (
                    <p className="author">Unknown</p>
                  )}
                  {book.volumeInfo.categories ? (
                    <p className="categories">{book.volumeInfo.categories}</p>
                  ) : (
                    <p></p>
                  )}
                </div>
              </div>
            </div>
            <div className="clearfix lower-content">
              {book.volumeInfo.description ? (
                <div className="popover-wrapper">
                  <a href="#" className="description">
                    <button className="popover-title">
                      <span>Description</span>
                    </button>
                  </a>
                  <div className="popover-content">
                    <p className="popover-description">
                      {book.volumeInfo.description}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="popover-wrapper" />
              )}
              <div className="see-more-text">
                <a
                  href={book.volumeInfo.previewLink}
                  target="_blank"
                  onclick="window.open({book.volumeInfo.prewviewLink},'name','width=600,height=400')"
                >
                  <h5 className="description">See More...</h5>
                </a>
              </div>
            </div>
            <div>
              <button
                className="my-book-btn"
                onClick={() => props.updateBookShelf(book)}
              >
                Add To My Book
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  console.log("called");
  return {
    updateBookShelf: (id) => dispatch(updateBookShelf(id)),
  };
};

const ReduxDisplayList = connect(null, mapDispatchToProps)(DisplayList);

export default ReduxDisplayList;
