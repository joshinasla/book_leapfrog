import React, { Component } from "react";

export class DisplayBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }

  componentWillMount() {
    const displayUrl =
      "https://google-books.p.rapidapi.com/volumes?=AIzaSyAOsteuaW5ifVvA_RkLXh0mYs6GLAD6ykc";
    //const token = f6e3806dbmsh32cb152e5e4ffe7p11e34ajsna1633c3a6b6e;
    fetch(displayUrl, {
      headers: {
        "X-RapidAPI-Host": "google-books.p.rapidapi.com",
        "X-RapidAPI-Key": "f0f6e3806dbmsh32cb152e5e4ffe7p11e34ajsna1633c3a6b6e",
      },
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((displayList) => {
        console.log({ displayList });
        this.setState({ list: displayList.items });
      });
  }
  render() {
    return (
      <div>
        {this.state.list.map((list) => (
          <div>{list.id}</div>
        ))}
      </div>
    );
  }
}

export default DisplayBook;
