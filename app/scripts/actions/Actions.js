"use strict";

var Dispatcher = require("dispatcher/Dispatcher");
var Constants = require("constants/Constants");
var API = require ("utils/API");

var ActionTypes = Constants.ActionTypes;
var Actions = {
  searchCards: function(query) {
    Dispatcher.dispatch({type: ActionTypes.SEARCH_CARDS, query: query});
    API.searchCards(query);
  }
};

module.exports = Actions;
