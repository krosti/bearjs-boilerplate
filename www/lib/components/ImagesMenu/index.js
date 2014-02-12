
define(

  function(require) {
    var View = require('component/ReuseGallery/index'),
        items, data,
        path = '/lib/assets/images/ImagesMenu/';
    require('application/app');
    items = [
      {
        route: "uploadGallery/dashboard",
        caption: "dashboard",
        klass: "bg-skyblueDark bg-dashboard"
      },
      {
        route: "uploadGallery/homepage",
        caption: "homepage",
        klass: "bg-greenDark bg-home"
      },
      {
        route: "uploadGallery/admin_page",
        caption: "admin page",
        klass: "bg-olive bg-admin_page"
      },
      {
        route: "uploadGallery/forms",
        caption: "forms",
        klass: "bg-violetDark bg-forms"
      },
      {
        route: "uploadGallery/workflow",
        caption: "workflows",
        klass: "bg-orangeredLight bg-workflows"
      },
      {
        route: "uploadGallery/icons",
        caption: "icons",
        klass: "bg-brown bg-icons"
      },
      {
        route: "uploadGallery/reports",
        caption: "reports",
        klass: "bg-purpleLight bg-reports"
      },
      {
        route: "uploadGallery/infographics",
        caption: "infographics",
        klass: "bg-oliveLight bg-infographics"
      },
      {
        route: "uploadGallery/modals",
        caption: "modals",
        klass: "bg-purpleDark bg-modals"
      },
      {
        route: "uploadGallery/notifications",
        caption: "notifications",
        klass: "bg-oliveDark bg-notifications"
      }
    ];
    data = {
      title: "Designed by Bearjs",
      icons: [path + "menu.icon.png"]
    }
    return new View({links: items, serialize: data});
  }

);
