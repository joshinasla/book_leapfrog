import React, { Component } from "react";
import { connect } from "react-redux";

import { searchItem } from "../../redux/action";
import DisplayList from "../../components/DisplayList/DisplayList";
import SearchArea from "../../components/SearchArea";
import "./SearchBook.css";
import { withRouter } from "react-router";

class SearchBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookDetails: [],
      searchField: "hi",
      flag: false,
      redirect: false,
    };
  }

  handleSearch = (e) => {
    this.props.history.push("?search=" + e.target.value);
    this.setState({ searchField: e.target.value });
  };

  searchBook = (e) => {
    this.props.onclick();
    console.log("searchbook");
    e.preventDefault();
    const bookDetailsUrl = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchField}&maxResults=10`;
    fetch(bookDetailsUrl)
      .then((res) => {
        if (res.status === 200) {
          console.log({ res });
          return res.json();
        } else if (res.status === 408) {
          console.log("SOMETHING WENT WRONG");
        }
      })
      .then((bookDetails) => {
        this.setState({
          bookDetails: bookDetails.items,
          flag: true,
        });
        this.props.sendItem(bookDetails);
      });
  };

  render() {
    console.log("this", this.state.bookDetails);
    return (
      <div>
        <div className="search-area-content">
          <SearchArea
            searchBook={this.searchBook}
            handleSearch={this.handleSearch}
          />
          <br />
          <br />
          <br />
          <br />
          <div className="display-list">
            {this.state.flag && (
              <DisplayList bookDetails={this.props.myBooks.items} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendItem: (book) => {
      return dispatch(searchItem(book));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myBooks: state.search.value,
  };
};

const ReduxSearchBook = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBook);

export default withRouter(ReduxSearchBook);
