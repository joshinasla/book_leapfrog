import React, { Component } from "react";

import SearchBook from "../SearchBook/SearchBook";
import NavBar from "../../components/NavBar/NavBar";
import DisplayList from "../../components/DisplayList";
import "./DisplayBook.css";

export class DisplayBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }

  componentWillMount() {
    const displayUrl =
      "https://8b4cd5e1-a1e8-47d8-a3fe-09f7daca171c.mock.pstmn.io/book";
    //const token = f6e3806dbmsh32cb152e5e4ffe7p11e34ajsna1633c3a6b6e;
    fetch(displayUrl)
      //   headers: {
      //     "x-rapidapi-host": "google-books.p.rapidapi.com",
      //     "x-rapidapi-key": "f0f6e3806dbmsh32cb152e5e4ffe7p11e34ajsna1633c3a6b6e",
      //     // "Access-Control-Allow-Origin": "*",
      //   },
      // }

      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((displayList) => {
        console.log({ displayList });
        this.setState({ list: displayList });
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
        <div className="container-main">
          {this.state.list.map((list) => (
            <div className="container">
              <a href={list.previewLink} className="content-text">
                <div className="cover">
                  <div className="clearfix header">
                    <div className="img-box">
                      <img
                        src={list.thumbnail}
                        width="100px"
                        alt="book cover"
                      ></img>
                    </div>
                    <div className="content">
                      <p className="title">{list.title}</p>
                      <p className="author">{list.authors}</p>
                      <p className="categories">{list.categories}</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
        {/* <DisplayList bookDetails={this.state.list} /> */}
      </div>
    );
  }
}

export default DisplayBook;
