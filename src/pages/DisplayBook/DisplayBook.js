import React, { Component } from "react";

import SearchBook from "../SearchBook/SearchBook";
import NavBar from "../../components/NavBar/NavBar";
import "./DisplayBook.css";

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
        // "Access-Control-Allow-Origin": "*",
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
      <div className="main-wrapper clearfix">
        <div className="nav-bar-wrapper">
          <NavBar />
        </div>
        <div className="search-wrapper">
          <SearchBook />
        </div>
      </div>
    );
  }
}

export default DisplayBook;
