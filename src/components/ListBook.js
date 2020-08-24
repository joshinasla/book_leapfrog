import React, { Component } from "react";

import BookItem from "./BookItem";

class ListBook extends Component {
  item = this.props.items;
  render() {
    return (
      <div>
        <h1>Your Book List</h1>
        <ul>
          {this.item.map((i) => {
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
