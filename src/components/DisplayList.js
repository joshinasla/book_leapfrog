// import React, { Component } from "react";
// import store from "../redux/store";
// import { connect } from "react-redux";
// class DisplayList extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       bookDetails: "",
//     };
//   }

//   // componentDidMount() {
//   //   const book = this.props.book;
//   //   console.log(book);
//   //   const bookDetailsUrl = `https://www.googleapis.com/books/v1/volumes?q=${book}`;
//   //   fetch(bookDetailsUrl)
//   //     .then((res) => {
//   //       console.log({ res });
//   //       return res.json();
//   //     })
//   //     .then((bookDetails) => {
//   //       console.log("hi", { bookDetails });
//   //       this.setState({
//   //         bookDetails: bookDetails,
//   //       });
//   //       console.log(bookDetails);
//   //     });
//   // }
//   render() {
//     // console.log(this.bookDetails);
//     return (
//       <div>
//         {/* {this.bookDetails.map((bookDetails) => (
//           <div>{bookDetails.id}</div>
//         ))} */}
//       </div>
//     );
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     book: state.book,
//   };
// };
// const ReduxDisplayList = connect(mapStateToProps)(DisplayList);

// export default ReduxDisplayList;
import React from "react";

function DisplayList(props) {
  console.log("he", props.bookDetails);
  const books = props.bookDetails;
  return (
    <div>
      {/* {props.bookDetails.map((bookDetails) => {
        return <div>{bookDetails.id}</div>;
      })} */}
      {books.map((book) => {
        return (
          <div>
            <p>{book.id}</p>
            <p>{book.volumeInfo.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default DisplayList;
