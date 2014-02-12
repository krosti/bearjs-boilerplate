
define(

  function(require) {
    var Backbone = require('backbone'),
        templateUrl = require.toUrl('./index.hbs'),
        Box = require('component/BoxLink/index');
    require('application/app');

    return Backbone.View.extend({
      template: templateUrl,
      beforeRender:  function () {
        _.each(this.options.links, function(model) {
          this.insertView(".nav-pills", new Box({tagName: "li", serialize: model}));
        }, this);
      }
    });
  }

);
