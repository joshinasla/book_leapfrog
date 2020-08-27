import React, { Component } from "react";

class StaticDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }

  componentWillMount() {
    const displayUrl =
      "https://8b4cd5e1-a1e8-47d8-a3fe-09f7daca171c.mock.pstmn.io/book";
    fetch(displayUrl)
      .then((res) => {
        return res.json();
      })
      .then((displayList) => {
        this.setState({ list: displayList });
      });
  }

  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default StaticDisplay;
