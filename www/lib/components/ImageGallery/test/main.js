/** Snippet for parse module's name from the URL */
var loc = window.location.pathname.split('/'),
    dir = loc[loc.length-3];
console.log('== component running - test ' + dir);

/**
 * Component boot up.
 *
 * @module app        Object with system configurations.
 * @module component  Component's module.
 */
require(['application/app', 'component/ImageGallery/index'],

  function(app, Component) {
    var model = new Backbone.Model();
    model.set({count: 18});
    new Component({el: $('#main')}).render().then(function () {
      this.getCounter().bindModel(model);
    });
  }

);
