describe("Component -> ReuseGallery", function() {
  beforeEach(function() {
    var that = this, loading = true;
    this.data = {
      title: "test",
      icons: ["bg-test"]
    };
    setFixtures(sandbox({id: "main"}));
    require(['application/app', 'component/ReuseGallery/index'],
      function(app, Component) {
        var data = [{
          route: "test",
          caption: "test",
          klass: "bg-test"
        }];
        that.view = new Component({el: $('#main'), links: data, serialize: that.data});
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
      expect(this.$el).toContain('.row-fluid');
    });
  });

  it("should have the defined icon", function() {
    var that = this;
    this.view.render().then(function(){
      expect(this.$el.find('.icon')).toHaveClass(that.data.icons[0]);
    });
  });

  it("should have the defined text", function() {
    var that = this;
    this.view.render().then(function(){
      expect(this.$el.find('.go-back > h2')).toHaveText(that.data.title);
    });
  });

  it("should insert a nested view", function() {
    spyOn(this.view, 'insertView');
    this.view.render().then(function(){
      expect(this.insertView).toHaveBeenCalled();
    });
  });  

  it("should have one BoxLink component", function() {
    var link = "#" + this.data.route;
    this.view.render().then(function(){
      expect(this.$el.find('.nav-pills')).toContain('li');
    });
  });

});