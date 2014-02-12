
/**
 * Component boot up.
 *
 * @module app        Object with system configurations.
 * @module component  Component's module.
 */
require(['application/app', 'component/Counter/index'],

  function(app, Component) {
    var model = new Backbone.Model();
    model.set({count: 18});
    new Component({el: $('#main')}).render().then(function() {
      this.bindModel(model);
    });
  }

);
