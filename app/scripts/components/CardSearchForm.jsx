"use strict";

var React = require("react");
var Actions = require("actions/Actions");

var CardSearchForm = React.createClass({
  getInitialState: function() {
    return {
      query: ""
    };
  },

  onChange: function() {
    this.setState({query: this.refs.query.value});
  },

  onSubmit: function(event) {
    event.preventDefault();
    Actions.searchCards(this.state.query);
  },

  render: function() {
    return (
      <form className="form-inline" onSubmit={this.onSubmit}>
        <div className="form-group">
          <div className="input-group">
            <input
              type="text"
              name="query"
              ref="query"
              className="form-control"
              placeholder="Words, words, words..."
              value={this.state.query}
              onChange={this.onChange}
            />
          </div>
        </div>
        <input type="submit" className="btn btn-primary" value="Search"/>
      </form>
    );
  }
});

module.exports = CardSearchForm;
