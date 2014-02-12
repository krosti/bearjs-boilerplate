
/**
 * Component boot up.
 *
 * @module app        Object with system configurations.
 * @module component  Component's module.
 */
require(['application/app', 'component/ImagesMenu/index'],

  function(app, view) {
    view.setElement('#main').render();
  }

);