import React, { Component } from "react";

import "./BookItem.css";

class BookItem extends Component {
  render() {
    return (
      <li id={this.props.id} className="list-book">
        <div className="container">
          <h2>{this.props.book}</h2>
          <p>{this.props.author}</p>
        </div>
        <div className="icons">
          <div>
            <i className="fa fa-check-circle fa-2x" aria-hidden="true" />
          </div>
        </div>
      </li>
    );
  }
}

export default BookItem;
