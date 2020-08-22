import React, { Component } from "react";
import { connect } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { searchItem } from "../redux/action";
import { Link } from "react-router-dom";
import DisplayList from "../components/DisplayList";
import "./SearchBook.css";
import SearchArea from "../components/SearchArea";
class SearchBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookDetails: [],
      searchField: "hi",
      flag: false,
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
    const bookDetailsUrl = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchField}`;
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
      });
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
        <SearchArea
          searchBook={this.searchBook}
          handleSearch={this.handleSearch}
        />
        <div>
          {this.state.flag && (
            <DisplayList bookDetails={this.state.bookDetails} />
          )}
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
