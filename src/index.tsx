// react dependencies
import React = require("react");
import { render as reactDOMrender } from "react-dom";
// hot reload for development
import { AppContainer } from "react-hot-loader";

import App from "./App";

const root = document.getElementById("root");

const render = (Component: () => JSX.Element) => {
  reactDOMrender(
    <AppContainer>
      <Component />
    </AppContainer>,
    root,
  );
};

render(App);

if (module.hot) {
  module.hot.accept("./App", () => { render(App); });
}
