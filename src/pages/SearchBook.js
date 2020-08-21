import React, { Component } from "react";
import { connect } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { searchItem } from "../redux/action";
import { Link } from "react-router-dom";
import DisplayList from "../components/DisplayList";
import "./SearchBook.css";
class SearchBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      book: this.props.book || "",
    };
  }
  handleChange = (e) => {
    this.setState({
      book: e.target.value,
    });
  };
  addSearch = (e) => {
    e.preventDefault();
    const searchBook = this.state.book;
    this.props.sendItem(searchBook);

    this.setState({
      book: "",
    });
  };
  render() {
    return (
      <div>
        <form className="searchform" onSubmit={this.addSearch}>
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
        </form>
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
