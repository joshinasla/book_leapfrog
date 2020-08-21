import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { searchItem } from "../redux/action";
import DisplaySingle from "../components/DisplaySingle";

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
          <input
            className="searchbox"
            type="text"
            value={this.state.book}
            onChange={this.handleChange}
          />
          <button className="addBtn" type="submit">
            <Link exact path="/display" component={DisplaySingle}>
              SEARCH
            </Link>
          </button>
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
