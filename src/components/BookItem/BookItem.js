import React, { Component } from "react";
import { AiFillCheckCircle } from "react-icons/ai";

import "./BookItem.css";

class BookItem extends Component {
  constructor(props) {
    super(props);
    this.state = { read: false };
  }

  readBtnChange = () => {
    this.setState({
      read: !this.state.read,
    });
  };
  render() {
    return (
      <li id={this.props.id} className="list-book">
        <div className="container">
          <h2>{this.props.book}</h2>
          <p>{this.props.author}</p>

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
