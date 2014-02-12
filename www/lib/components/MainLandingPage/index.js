
define(

  function(require) {
    var Backbone = require('backbone'),
        templateUrl = require.toUrl('./index.hbs');

    return Backbone.View.extend({
      template: templateUrl
    });
  }

);
