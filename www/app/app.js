
define(["backbone", "handlebars", "layoutmanager", "modelbinder"],

  function(Backbone, Handlebars) {

  // Provide a global location to place configuration settings and module
  // creation.
  var app = {
    // The root path to run the application.
    root: "/app/"
  };

  // Localize or create a new JavaScript Template object.
  var JST = window.JST = window.JST || {};

  // Configure LayoutManager with Backbone Boilerplate defaults.
  Backbone.Layout.configure({
    // Allow LayoutManager to augment Backbone.View.prototype.
    // Global config
    manage: true,

    fetch: function(path) {
      // detect if we need to append the template extension.
      if ((path.lastIndexOf('.hbs') + 4) !== path.length) {
        path = path + ".hbs";
      }

      // If cached, use the compiled template.
      if (JST[path]) {
        return JST[path];
      }

      // Put fetch into `async-mode`.
      var done = this.async();

      // Only prepend the app.root when the string is relative.
      if (path.charAt(0) !== '/') {
        path = app.root + path;
      }

      // Seek out the template asynchronously.
      $.get(path, function(contents) {
        done(JST[path] = Handlebars.compile(contents));
      });
    }
  });

  return app;
});
