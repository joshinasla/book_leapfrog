import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateBookShelf } from "../../redux/action";
import "./DisplayList.css";

function DisplayList(props) {
  console.log("he", props.bookDetails);
  const books = props.bookDetails;
  let book_flag = false;

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
              <div className="clearfix">
                <div className="popover-wrapper">
                  <a href="#" className="description">
                    <h5 className="popover-title">Description</h5>
                  </a>
                  <div className="popover-content">
                    <p className="popover-description">
                      {book.volumeInfo.description}
                    </p>
                  </div>
                </div>
                <div className="see-more-text">
                  <a href={book.volumeInfo.previewLink}>
                    <h5 className="description">See More...</h5>
                  </a>
                </div>
              </div>
              <div>
                <button onClick={updateBookShelf(book.id, (book_flag = true))}>
                  My Book
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      { updateBookShelf },
      dispatch,
      console.log("dispatchhi")
    ),
  };
};
const ReduxDisplayList = connect(null, mapDispatchToProps)(DisplayList);
export default ReduxDisplayList;
