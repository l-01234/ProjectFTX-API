import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/common/home";
import Prices from "./components/common/prices";
import {} from "../src/lib/api";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* <Navbar></Navbar> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/prices" component={Prices} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
