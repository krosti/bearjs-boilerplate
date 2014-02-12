describe("Component -> Counter", function() {
  beforeEach(function() {
    var that = this, loading = true;
    setFixtures(sandbox({id: "main"}));
    require(['application/app', 'component/Counter/index'],
      function(app, Component) {
        that.model = new Backbone.Model();
        that.view = new Component({el: $('#main')});
        loading = false;
      }
    );
    waitsFor(function() {
      return !loading; 
    });
  });

  it("should be initialized", function() {
    expect(this.view).toBeDefined();
    expect(this.view.$el.selector).toEqual('#main');
  });

  it("should render the empty template", function() {
    this.view.render().then(function(){
      expect(this.$el).toContain('.number');
    });
  });

  it("should display the value of the model", function() {
    var model = this.model, testValue = 18;
    model.set({count: testValue});
    this.view.render().then(function(){
      this.bindModel(model);
      expect(this.$el).toHaveText(testValue);
    });
  });
});