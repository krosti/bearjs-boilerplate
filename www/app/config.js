
require.config({

  deps: ["main"],

  paths: {
    // modules starting with application will be looked up here.
    application   : "/app",

    // modules starting with component will be looked up here.
    component     : "/lib/components",

    backbone      : "/vendor/backbone/backbone",
    layoutmanager : "/vendor/backbone.layoutmanager/backbone.layoutmanager",
    modelbinder   : "/vendor/backbone.modelbinder/backbone.modelbinder",
    jquery        : "/vendor/jquery/jquery",
    underscore    : "/vendor/underscore/underscore",
    handlebars    : "/vendor/handlebars/handlebars"
  },

  shim: {
    handlebars : {
      exports : "Handlebars"
    },

    jquery : {
      exports : "jQuery"
    },

    underscore : {
      exports : "_"
    },

    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    },

    layoutmanager: {
      deps: ["backbone"]
    },

    modelbinder: {
      deps: ["backbone"]
    }
  }
});
