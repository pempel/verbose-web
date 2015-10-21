"use strict";

var React = require("react");
var ReactDOM = require("react-dom");
var ReactRouter = require("react-router");
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var API = require("./utils/API");
window.API = API;

var createBrowserHistory = require("history/lib/createBrowserHistory");
var history = createBrowserHistory();
var routes = (
  <Route path="/" component={require("components/RootPage")}>
    <Route path="add" component={require("components/AddCardPage")}/>
    <Route path="edit" component={require("components/EditCardsPage")}/>
    <Route path="learn" component={require("components/LearnCardsPage")}/>
  </Route>
);

var content = document.getElementById("content");
ReactDOM.render(<Router history={history} routes={routes}/>, content);
