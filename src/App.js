import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DisplayBook from "./pages/DisplayBook";
import SearchBook from "./pages/SearchBook";
import { Provider } from "react-redux";
import store from "./redux/store";
import DisplayList from "./components/DisplayList";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/display" component={DisplayBook}></Route>
            <Route exact path="/search" component={SearchBook}></Route>
            <Route exact path="/list" component={DisplayList}></Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
