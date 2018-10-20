import { bind } from "classnames/bind";
import React = require("react");
import { BrowserRouter, Link } from "react-router-dom";

import styles = require("./App.scss");
import Routes from "./Routes";

const cx = bind(styles);

const App = () => (
  <BrowserRouter>
    <main className={cx("container")}>
    <div className={cx("nav")}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </div>
      <Routes />
      <div className={cx("footer")}>
        <ul>
          <li>
            Find me at:
          </li>
          <li>
            <a href="https://www.linkedin.com/in/nathan-faltermeier-a4ab48162">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/Blackop778">Github</a>
          </li>
        </ul>
      </div>
    </main>
  </BrowserRouter>
);

export default App;
