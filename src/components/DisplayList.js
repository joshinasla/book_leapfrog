import React from "react";

import "./DisplayList.css";
import content from "./content.jpg";

function DisplayList(props) {
  console.log("he", props.bookDetails);
  const books = props.bookDetails;
  return (
    <div className="wrapper">
      {books.map((book) => {
        return (
          <div className="container">
            <div className="cover ">
              <div className="clearfix header">
                <div className="img-box">
                  <img src={content} alt="book"></img>
                </div>
                <div className="content">
                  <p className="title">{book.volumeInfo.title}</p>
                  <p className="author">{book.volumeInfo.authors}</p>
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
                <button>My Book</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DisplayList;
