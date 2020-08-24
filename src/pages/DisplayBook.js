import React, { Component } from "react";

export class DisplayBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }

  componentWillMount() {
    const displayUrl = "https://google-books.p.rapidapi.com/volumes";
    //const token = f6e3806dbmsh32cb152e5e4ffe7p11e34ajsna1633c3a6b6e;
    fetch(displayUrl, {
      headers: {
        "x-rapidapi-host": "google-books.p.rapidapi.com",
        "x-rapidapi-key": "f0f6e3806dbmsh32cb152e5e4ffe7p11e34ajsna1633c3a6b6e",
        "Access-Control-Allow-Origin": "*",
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
