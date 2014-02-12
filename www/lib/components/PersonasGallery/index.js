
define(

  function(require) {
    var path = '/lib/assets/images/PersonasGallery/',
        View = require('component/ReuseGallery/index'),
        templateUrl = require.toUrl('./index.hbs'),
        items, data;
    require('application/app');
    items = [
      {
        route: "uploadGallery/new_hires",
        caption: "New Hires",
        klass: "bg-brown bg-new_hires"
      },
      {
        route: "uploadGallery/interns",
        caption: "Interns",
        klass: "bg-oliveLight bg-interns"
      },
      {
        route: "uploadGallery/partners",
        caption: "Partners",
        klass: "bg-purpleLight bg-partners"
      },
      {
        route: "uploadGallery/managers",
        caption: "Managers",
        klass: "bg-oliveDark bg-managers"
      },
      {
        route: "uploadGallery/senior_managers",
        caption: "Sr. Managers",
        klass: "bg-olive bg-senior_managers"
      }
    ];
    data = {
      title: "Personas",
      icons: [path + "icon-personas.png"]
    }
    return Backbone.View.extend({
      template: templateUrl,
      views: {
        '.personasgallery': new View({links: items, serialize: data})
      }
    });
  }

);
