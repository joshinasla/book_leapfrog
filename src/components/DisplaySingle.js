import React, { Component } from "react";
import store from "../redux/store";
class DisplaySingle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookDetails: "",
    };
  }

  componentDidMount() {
    const state = store.getState();
    const bookDetailsUrl = `https://www.googleapis.com/books/v1/volumes?q=${state}`;
    fetch(bookDetailsUrl)
      .then((res) => {
        console.log({ res });
        return res.json();
      })
      .then((bookDetails) => {
        console.log({ bookDetails });
        this.setState({
          bookDetails: bookDetails,
        });
      });
  }
  render() {
    return (
      <div>
        {/* {bookDetails.map((bookDetails) => (
          <div>{this.state.bookDetails.id}</div>
        ))} */}
      </div>
    );
  }
}

export default DisplaySingle;
