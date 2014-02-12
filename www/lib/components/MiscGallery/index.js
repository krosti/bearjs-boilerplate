
define(

  function(require) {
    var View = require('component/ReuseGallery/index'),
        path = "/lib/assets/images/MiscGallery/",
        templateUrl = require.toUrl('./index.hbs'),
        items, data;
    require('application/app');
    items = [
      {
        route: "uploadGallery/style_guide",
        caption: "Style Guide",
        klass: "bg-oliveLighter bg-style_guide"
      },
      {
        route: "uploadGallery/design_thinking",
        caption: "Design Thinking Getting Started",
        klass: "bg-oliveLight bg-design_thinking"
      },
      {
        route: "uploadGallery/design_guidelines",
        caption: "Design Guidelines",
        klass: "bg-lavenderLight bg-design_guidelines"
      }
    ];
    data = {
      title: "Miscelaneous",
      icons: [path + "icon-miscelaneous.png"]
    }
    return Backbone.View.extend({
      template: templateUrl,
      views: {
        '.miscgallery': new View({links: items, serialize: data})
      }
    });
  }

);
