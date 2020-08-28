import React, { Component } from "react";
import { AiFillCheckCircle } from "react-icons/ai";

import "./BookItem.css";
import bookcover from "../../asset/bookcover.jpg";

class BookItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singleItem: [],
      read: false,
    };
  }

  readBtnChange = () => {
    this.setState({
      read: !this.state.read,
    });
  };

  render() {
    const bookDetail = this.props.book;

    return (
      <div>
        <li id={bookDetail.id} className="list-book">
          <div className="container">
            <a href={bookDetail.previewLink} className="content-text">
              <div className="cover">
                <div className="clearfix header">
                  <div className="img-box">
                    {bookDetail.volumeInfo.imageLinks &&
                    bookDetail.volumeInfo.imageLinks.thumbnail ? (
                      <img
                        src={bookDetail.volumeInfo.imageLinks.thumbnail}
                        width="100px"
                        alt="book cover"
                      />
                    ) : (
                      <img src={bookcover} width="100px" alt="book cover" />
                    )}
                  </div>
                  <div className="content">
                    {bookDetail.volumeInfo.title ? (
                      <p className="title">{bookDetail.volumeInfo.title}</p>
                    ) : (
                      <p className="title"></p>
                    )}
                    {bookDetail.volumeInfo.authors ? (
                      <p className="author">{bookDetail.volumeInfo.authors}</p>
                    ) : (
                      <p className="author">Unknown</p>
                    )}
                    {bookDetail.volumeInfo.categories ? (
                      <p className="categories">
                        {bookDetail.volumeInfo.categories}
                      </p>
                    ) : (
                      <p></p>
                    )}
                  </div>
                </div>
              </div>
            </a>
            <div className="clearfix">
              <div className="icons">
                <div>
                  <AiFillCheckCircle aria-hidden="true" />
                  <button className="read-btn" onClick={this.readBtnChange}>
                    <p>{this.state.read ? "Finished" : "Reading"}</p>
                  </button>
                </div>
              </div>
              <div className="read-btn">
                <a
                  href={bookDetail.volumeInfo.previewLink}
                  target="_blank"
                  onclick="window.open({bookDetail.volumeInfo.previewLink},'name','width=600,height=400')"
                  className="preview-Link"
                >
                  READ
                </a>
              </div>
            </div>
          </div>
        </li>
      </div>
    );
  }
}

export default BookItem;
