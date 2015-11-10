"use strict";

var Dispatcher = require("dispatcher/Dispatcher");
var Constants = require("constants/Constants");
var API = require ("utils/API");

var ActionTypes = Constants.ActionTypes;
var ActionCreators = {

  searchCards: function(query) {
    Dispatcher.dispatch({type: ActionTypes.SEARCH_CARDS, query: query});
    API.searchCards(query);
  },

  receiveCards: function(json) {
    Dispatcher.dispatch({type: ActionTypes.RECEIVE_CARDS, json: json});
  }

};

module.exports = ActionCreators;
