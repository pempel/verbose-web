"use strict";

var React = require("react");
var Header = require("components/shared/Header");

var RootPage = React.createClass({
  render: function() {
    return (
      <div>
        <Header/>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = RootPage;
