
/**
 * Component boot up.
 *
 * @module app        Object with system configurations.
 * @module component  Component's module.
 */
require(['application/app', 'component/BearjsFontsBootstrap/index'],

  function(app, Component) {
    new Component({el: $('#main')}).render();
  }

);
