import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { searchItem } from "../../redux/action";
import DisplayList from "../../components/DisplayList/DisplayList";
import SearchArea from "../../components/SearchArea";
import "./SearchBook.css";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

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

  // handleChange = (e) => {
  //   this.setState({
  //     book: e.target.value,
  //   });
  // };
  // addSearch = (e) => {
  //   e.preventDefault();
  //   const searchBook = this.state.book;
  //   this.props.sendItem(searchBook);

  //   this.setState({
  //     book: "",
  //   });
  // };
  handleSearch = (e) => {
    this.setState({ searchField: e.target.value });
  };
  searchBook = (e) => {
    e.preventDefault();
    const bookDetailsUrl = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchField}&maxResults=3`;
    fetch(bookDetailsUrl)
      .then((res) => {
        console.log({ res });
        return res.json();
      })
      .then((bookDetails) => {
        console.log("hi", { bookDetails });
        this.setState({
          bookDetails: bookDetails.items,
          flag: true,
        });
        this.props.sendItem(bookDetails);
      });
  };
  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/find" />;
    }
  };
  render() {
    console.log("this", this.state.bookDetails);
    return (
      <div>
        {/* <form className="searchform" onSubmit={this.addSearch}>
          <div className="searchBox">
            <input
              className="searchbox"
              type="text"
              value={this.state.book}
              onChange={this.handleChange}
              placeholder="Search..."
            />
            <Link to="/list">
              <button className="addBtn" type="submit">
                <FaSearch />
              </button>
            </Link>
          </div>
        </form> */}
        <div className="nav-bar-wrapper">
          <NavBar />
        </div>
        <div className="search-area-content">
          <SearchArea
            searchBook={this.searchBook}
            handleSearch={this.handleSearch}
            onclick={this.setRedirect}
            renderRedirect={this.renderRedirect}
          />
          <br />
          <br />
          <br />
          <br />

          <div className="display-list">
            {this.state.flag && (
              <DisplayList bookDetails={this.state.bookDetails} />
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

const ReduxSearchBook = connect(null, mapDispatchToProps)(SearchBook);
export default ReduxSearchBook;
