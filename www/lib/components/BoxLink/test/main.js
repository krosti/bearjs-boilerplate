var arr = window.location.pathname.split('/'),
    elem = arr.splice(-1),
    path = arr.join('/');

/**
 * Component boot up.
 *
 * @module app        Object with system configurations.
 * @module component  Component's module.
 */
require(['application/app', 'component/BoxLink/index'],

  function(app, Component) {
    var data = {
      route: "personas",
      caption: "Personas",
      image: path + "/test.png"
    };
    new Component({el: $('#main'), serialize: data}).render();
  }

);
