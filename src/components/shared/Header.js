"use strict";

var React = require("react");
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;

var Header = React.createClass({
  render: function() {
    return (
      <div>
        <div className="jumbotron">
          <div className="container">
            <h1>Verbose</h1>
            <p>Those who know many languages live as many lives as the languages they know.</p>
          </div>
        </div>
        <div className="container">
          <ul className="nav nav-pills">
            <li><Link to="/add">Add</Link></li>
            <li><Link to="/edit">Edit</Link></li>
            <li><Link to="/learn">Learn</Link></li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Header;
