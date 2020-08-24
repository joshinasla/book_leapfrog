import React, { Component } from "react";

export class BookItem extends Component {
  render() {
    return (
      <li
        id={this.props.id}
        // className={this.props.read ? "bookFinished" : null}
      >
        <div className="itemPresentation">
          <h2>{this.props.book}</h2>
          <p>{this.props.author}</p>
        </div>
        <div className="icons">
          <div>
            <i className="fa fa-check-circle fa-2x" aria-hidden="true" />
            {/* <p>{this.props.read ? "Finished" : "Reading"}</p> */}
          </div>
        </div>
      </li>
    );
  }
}

export default BookItem;
