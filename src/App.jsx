import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import notFoundImage from "./404_Error.jpg";
import "./main.css";
import PropTypes from "prop-types";
import "typeface-roboto";
import Test1 from "./Test1.jsx";
import Test2 from "./Test2.jsx";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/test/1" exact component={Test1} />
        <Route path="/test/2" exact component={Test2} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;

const Layout = ({children}) => (
  <div className={"layout"}>
    <div className={"drawer"}>
      <Navigation />
    </div>
    <div className={"content"}>
      {children}
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};

const Navigation = () => (
  <div className={"navigation"}>
    <Link to={"/"}>Home</Link>
    <Link to={"/test/1"}>Ülesanne 1</Link>
    <Link to={"/test/2"}>Ülesanne 2</Link>
  </div>
);

const Home = () => (
  <div>
    Tere!
    <p>
      ...
    </p>
  </div>
);

const NotFound = () => (
  <div>
    <img src={notFoundImage}/>
  </div>
);
