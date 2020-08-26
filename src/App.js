import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/store";
import DisplayBook from "./pages/HomePage/HomePage";
import SearchBook from "./pages/SearchBook/SearchBook";
import DisplayList from "./components/DisplayList/DisplayList";
import MyBooks from "./pages/MyBooks/MyBooks";
import NavBar from "./components/NavBar/NavBar";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <div className="nav-bar-wrapper">
            <NavBar />
          </div>
          <Switch>
            <Route exact path="/" component={DisplayBook}></Route>
            <Route exact path="/search" component={SearchBook}></Route>
            <Route exact path="/list" component={DisplayList}></Route>
            <Route exact path="/mybook" component={MyBooks}></Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
