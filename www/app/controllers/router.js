
define(function(require) {

  var Backbone = require('backbone'),
      MainMenu = require('component/MainLandingPage/index');

  var Router = Backbone.Router.extend({
    routes: {
      // Root
      "": "index",

      // Dynamically open routes of each gallery
      "gallery/:actions": "displayGallery"
    },

    /*
    * @description Root
    */
    index: function() {
      var main = new Backbone.Layout({
          template: "views/layouts/main",
          views: {
            ".body": new MainMenu()
          }
      });

      // Attach the Layout to the <body></body>.
      $("#main").empty().append(main.el);

      // Render the Layout.
      main.render();
    },

    /*
    * @description Dynamically open routes of each gallery
    * @example
    *     a:link => /gallery/your-gallery  =>  component/YourGallery/index
    */
    displayGallery: function(actions){
      var actions = actions.split('-'),
          thisAction = 
            actions[0].charAt(0).toUpperCase() + actions[0].slice(1) + 
            actions[1].charAt(0).toUpperCase() + actions[1].slice(1);

      // Callback to request gallery component
      // actions    => your-gallery
      // thisAction => YourGallery
      require(['component/'+thisAction+'/index'],
        function(gallery){

          var main = new Backbone.Layout({
            template: "views/layouts/main",
            views: {
              ".body": new gallery()
            }
          });

          // Attach the Layout to the <body></body>.
          $("#main").empty().append(main.el);

          // Render the Layout.
          main.render();
        }
      );

    }
  });

  return Router;

});
