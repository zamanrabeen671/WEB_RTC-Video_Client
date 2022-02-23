import "antd/dist/antd.css";
import "font-awesome/css/font-awesome.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
