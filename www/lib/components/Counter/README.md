# Counter - Component

## Watch the Demo

1. npm install

2. grunt less

3. node server.js

4. http://localhost:8080/lib/components/Counter/test/index.html


## Use the Component

The component has a default setting to work with models that have an attribute named 'count'.

    require(['application/app', 'component/Counter/index'],

      function(app, Component) {
        var model = new Backbone.Model();
        model.set({count: 18});
        new Component({el: $('#main')}).render().then(function() {
          this.bindModel(model);
        });
      }
    
    );

However, if the model's attribute has a different name the binder can accept another attribute to define that.

    require(['application/app', 'component/Counter/index'],

      function(app, Component) {
        var model = new Backbone.Model();
        model.set({personas: 18});
        new Component({el: $('#main')}).render().then(function() {
          // this.bindModel(model);
          this.bindModel(model, 'personas');
        });
      }
    
    );
