
define(

  function(require) {
    var Backbone = require('backbone'),
        Counter = require('component/Counter/index'),
        templateUrl = require.toUrl('./index.hbs');
        
    return Backbone.View.extend({
      template: templateUrl,
      views: {
        ".personas": new Counter()
      },
      getCounter: function () {
        return this.views[".personas"];
      }
    });
  }

);
