# Counter - Component

## Watch the Demo

1. npm install

2. grunt less

3. node server.js

4. http://localhost:8080/lib/components/Counter/test/index.html


## Use the Component

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