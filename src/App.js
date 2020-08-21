import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DisplayBook from "./pages/DisplayBook";
import SearchBook from "./pages/SearchBook";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/displaybooks" component={DisplayBook}></Route>
            <Route exact path="/search" component={SearchBook}></Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
