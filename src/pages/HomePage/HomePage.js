import React, { Component } from "react";

import SearchBook from "../SearchBook/SearchBook";
import NavBar from "../../components/NavBar/NavBar";
import StaticDisplay from "../../components/DisplayBook";
import "./HomePage.css";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search_clicked: false,
    };
  }
  onClick = (e) => {
    this.setState({
      search_clicked: true,
    });
  };

  render() {
    return (
      <div className="main-wrapper clearfix">
        <div className="nav-bar-wrapper">
          <NavBar />
        </div>
        <div className="search-wrapper">
          <SearchBook onClick={this.onClick} />
        </div>
        {/* <div className="container-main">
          {this.state.list.map((list) => (
            <div className="container">
              //<a href={list.previewLink} className="content-text">
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
          { showResults ? <Results /> : null }
          <MyComponent style={this.state.showMyComponent ? {} : { display: 'none' }} />
        </div> */}
        {this.search_clicked ? null : <StaticDisplay />}
      </div>
    );
  }
}

export default HomePage;
