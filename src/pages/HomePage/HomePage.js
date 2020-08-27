import React, { Component } from "react";
import { Link } from "react-router-dom";

import SearchBook from "../SearchBook/SearchBook";
import StaticDisplay from "../../components/StaticDisplay";
import "./HomePage.css";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search_clicked: false,
    };
  }

  onClick = (e) => {
    console.log("onclick encountered");
    this.setState({
      search_clicked: true,
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="main-wrapper clearfix">
        <div className="search-wrapper">
          <SearchBook onclick={this.onClick} />
        </div>
        {this.state.search_clicked ? null : <StaticDisplay />}
      </div>
    );
  }
}

export default HomePage;
