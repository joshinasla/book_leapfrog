import React, { Component } from "react";
import { AiFillCheckCircle } from "react-icons/ai";

import "./BookItem.css";

class BookItem extends Component {
  render() {
    return (
      <li id={this.props.id} className="list-book">
        <div className="container">
          <h2>{this.props.book}</h2>
          <p>{this.props.author}</p>

          <div className="icons">
            <div>
              <AiFillCheckCircle aria-hidden="true" />
              <p>{this.props.read ? "Finished" : "Reading"}</p>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default BookItem;
