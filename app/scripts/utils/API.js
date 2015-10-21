"use strict";

var request = require("superagent");

var host = "http://192.168.99.100:3000";

var API = {
  getCards: function() {
    request
      .get(host + "/cards")
      .set("Accept", "application/json")
      .end(function(error, response) {
        if (response) {
          var json = JSON.parse(response.text);
          console.log(json);
        }
      });
  }
};

module.exports = API;
