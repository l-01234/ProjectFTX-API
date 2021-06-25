import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/common/home";
import Converter from "./components/common/converter";
import {} from "../src/lib/api";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* <Navbar></Navbar> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/converter" component={Converter} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
