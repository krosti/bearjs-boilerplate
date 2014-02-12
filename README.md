BearJS - BackboneJS Boilerplate
-------------------------------

@author: fernando.cea <@krosti>

![Logo](/docs/bearjs.png "BearJS Logo")



[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/krosti/bearjs-boilerplate/trend.png)](https://bitdeli.com/free "Bitdeli Badge")



This boilerplate is the product of much research and frustration. Existing boilerplates freely modify Backbone core, lack a build process, and are very prescriptive; Backbone Boilerplate changes that.

Organize your application with a logical file structure, develop your Models/Collections/Views/Routers inside modules, and build knowing you have efficient code that will not bottleneck your users.


How to start
------------

1. Go to `www/`
1. Run `npm install -g grunt-cli` for build your code. 
1. Run `npm install`.
1. Run `grunt watch` and that's it! :)  I'm assuming you have already installed [Node.js](http://nodejs.org/) >=0.10
    `Started connect web server on localhost:9000.`
1. Go to your browser on this url: `http://localhost:9000`


Folder's organization
---------------------

`/docs #documentation`

`/tools #configuration files`

`/www #application`



What's included?
---------------

This project is built upon the hard work provided by the open source community. Design decisions change frequently as this is a rapidly evolving field, this means bundled libraries are subject to change.



### Third-party JavaScript



Web application development:

-   jQuery - (DOM manip, AJAX, etc)

-   Underscore - (Functional utilities)

-   Backbone.js - (Application structure)



Module management:

-   RequireJS - (Development module loader - AMD)

(future) -   Almond - (Production module loader) (review here)



View management:

-   LayoutManager - (Composite view manager)

-   ModelBinder - (Model-View binding for Backbone)



Third-party CSS

-   LESS - (CSS Preprocessor)

-   Twitter Bootstrap



## Filesystem structure

The structure is fairly straightforward. Application code, Stylesheets, and templates are placed inside the app/ directory.

All static assets are placed in the vendor/ directory. Third-party JavaScript and CSS, images, and vendor files go here.

The `test/` directory contains three different testing harnesses, Mocha, Jasmine and QUnit. These are fully wired up to work immediately with your application. You can run from the browser, by opening the respective url (mocha|jasmine|qunit) http://localhost:8000/test/mocha/. For CI, use the Grunt plugins to run your tests headless. You can also use Karma to load your tests.


``` unicode

.
├── app
│   ├── app.js
│   ├── config.js
│   ├── main.js
│   ├── collections
│   ├── controllers
│   ├── models
│   ├── templates
│   ├── tests
│   ├── views
├── lib
│   ├── assets
│   ├── helpers
│   ├── components
│   │   ├── ComponentName
│   │   │   ├── tests
│   │   │   │   └── all.css
│   │   │   │   └── all.less
│   │   │   │   └── index.html
│   │   │   │   └── main.js
│   │   │   │   └── test.png
│   │   │   └── Gruntfile.js
│   │   │   └── index.hbs
│   │   │   └── index.js
│   │   │   └── package.json
│   │   │   └── README.md
│   │   │   └── style.less
├── README.md
└── vendor
    ├── backbone
    ├── backbone.layoutmanager
    ├── backbone.modelbinder
    ├── bootstrap
    ├── handlebars
    ├── jasmine
    ├── jquery
    ├── require
    ├── underscore

```


Files



These are files within the Backbone Boilerplate that hold special significance to the project.



Directory: Application `www/`



`app.js`



Load all application-wide logic inside this file. This is loaded before any other script in the application. This module will return a single object called app. This object can be used as a global pub/sub for events, store additional properties (such as an apiHost), and contains the useLayout method. More information can be found in the Using Layouts section.



Use this file to `www/lib/components` plugins, add global app variables, and when you need to change your template configuration.



`config.js`



This is one of the two configuration files. This is a RequireJS configuration file and you can read up more on the options. You will mostly use this file for updating your dependencies or adding new folder paths. More information can be found in the Modules (RequireJS) section.



`main.js`



This file serves as the entry point into the application. It sets up the application and initializes the Router. This file also hijacks every link on the page allowing for #route/ to be routed through the Router.



`router.js`



This file is your main application router. Regardless if you use sub-routers or not, you should wire up your application state here.



Directory: Stylesheets `www/lib/assets/less`



`less/application.less`



Since CSS doesn't have a module loader plugin like RequireJS (we have LESS :) ), its not particularly easy to get files in without modifying index.html. This project leverages @import statements to dynamically fetch stylesheets. Whenever you add or remove a stylesheet, make sure its updated here.



Directory: Third-party assets `vendor/`



All third-party javascript and stylesheets should be added within this directory. Stylesheets can be loaded using the @import statement within `www/less/application.less`. Javascript files can be loaded by adding an additional path to the js file within app/config.js and using RequireJS to load the plugin where needed.



Directory: Views `www/app/views`



`layouts/main.hbs`



Is your single point of entry to the application and since HTML5 pushState is enabled all 404 requests will automatically forward to this page to enable client side routing. (review here if is working)



---



### Where is the magic? Here:

- Add web components:

    - Directory: `www/lib/components/:nameOfYourComponent`

- `grunt.js`



The Gruntfile is the heart of the build system. Any time you run bbb commands you should ensure settings are correct in here. It has safe defaults, but if you add new stylesheets you will need to update this file. More information can be found in the Build (Grunt) section.



### nameOfYourComponent - Component

1.  Watch the Demo

2.  `npm install`

3.  `grunt less`

4.  `node server.js`

5.  test it: `http://localhost:8080/lib/components/nameOfYourComponent/test/index.html`





### Use the Component

The component must recieve serialized data that will be rendered in the template.



```js


require(['application/app', 'component/BoxLink/index'],


  function(app, Component) {

    var data = {
      route: "foo/bar",
      caption: "Bar",
      image: "/test.png"
    };

    new Component({el: $('#main'), serialize: data}).render();

  }

);



```

--


ToDo:

[ ] Improve documentation
