define(

  function(require) {
    var Backbone = require('backbone'),
        Binder = require('modelbinder'),
        templateUrl = require.toUrl('./index.hbs');

    return Backbone.View.extend({
      template: templateUrl,
      initialize: function () {
        this._modelBinder = new Binder();
      },
      cleanup: function () {
        this._modelBinder.unbind();
      },
      bindModel: function (model, prop) {
        var binding = {};
        prop = prop || "count";
        binding[prop] = ".number";
        this._modelBinder.bind(model, this.el, binding);
        return this;
      }
    });
  }

);