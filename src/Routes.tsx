import React = require("react");
import { Route, Switch } from "react-router-dom";
import { Home, Portfolio } from "./containers";

const Routes = () => (
  <Switch>
    <Route exact={true} path="/" component={Home} />
    <Route path="/portfolio" component={Portfolio} />
  </Switch>
);

export default Routes;
