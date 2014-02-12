
/**
 * Component boot up.
 *
 * @module app        Object with system configurations.
 * @module component  Component's module.
 */
require(['application/app', 'component/PersonasGallery/index'],

  function(app, Component) {
    new Component({el: $('#main')}).render();
  }

);
