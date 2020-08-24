import React, { Component } from "react";

export class ListBook extends Component {
  render() {
    return (
      <div>
        <h1>Your Book List</h1>
        <ul>
          {this.props.bookToRead.map((i) => {
            return (
              <BookItem
                id={i.id}
                book={i.book}
                author={i.author}
                read={i.read}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ListBook;
