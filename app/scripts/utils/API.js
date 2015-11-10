"use strict";

var request = require("superagent");
var ActionCreators = require("actions/ActionCreators");

var API_URL = process.env.API_URL;

var API = {

  searchCards: function(query) {
    request
      .get(API_URL + "/cards")
      .query({query: query})
      .set("Accept", "application/json")
      .end(function(error, response) {
        if (error) {
          console.log("ERROR: ", error);
        }
        else {
          var json = JSON.parse(response.text);
          ActionCreators.receiveCards(json);
        }
      });
  }

};

module.exports = API;
