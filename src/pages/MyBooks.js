import React, { Component } from "react";

import ListBook from "../components/ListBook";

export class MyBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          book: "Flowers and their associations",
          author: "Anne Pratt",
          saved: true,
          read: false,
        },
        {
          id: 2,
          book: "The Language of Flowers",
          author: "Frederic Shoberl",
          saved: false,
          read: true,
        },
        {
          id: 3,
          book: "A Brighter Sun",
          author: "Liz Gerschel",
          saved: false,
          read: false,
        },
        {
          id: 4,
          book: "Sun Yat-sen",
          author: "Marie-Claire Bergère",
          saved: false,
          read: false,
        },
        {
          id: 5,
          book: "The Moon in the Water",
          author: "Gwenn Boardman Petersen",
          saved: false,
          read: false,
        },
        {
          id: 6,
          book: "Observing the Moon",
          author: "Peter Wlasuk",
          saved: false,
          read: false,
        },
        {
          id: 7,
          book: "The Hour of the Star",
          author: "Clarice Lispector",
          saved: false,
          read: false,
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <ListBook items={this.state.items} />
      </div>
    );
  }
}

export default MyBooks;
