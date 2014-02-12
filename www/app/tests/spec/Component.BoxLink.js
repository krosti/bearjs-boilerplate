describe("Component -> BoxLink", function() {
  beforeEach(function() {
    var that = this, loading = true;
    this.data = {
      route: "test",
      caption: "test",
      klass: "bg-test"
    };
    setFixtures(sandbox({id: "main"}));
    require(['application/app', 'component/BoxLink/index'],
      function(app, Component) {
        that.view = new Component({el: $('#main'), serialize: that.data});
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
      expect(this.$el).toContain('.rounded-box-link');
    });
  });

  it("should have the defined link", function() {
    var link = "#" + this.data.route;
    this.view.render().then(function(){
      expect(this.$el.find('.rounded-box-link')).toHaveAttr('href', link);
    });
  });

  it("should have the defined class", function() {
    var that = this;
    this.view.render().then(function(){
      expect(this.$el.find('.rounded-box-link')).toHaveClass(that.data.klass);
    });
  });

  it("should have the defined text", function() {
    var that = this;
    this.view.render().then(function(){
      expect(this.$el.find('.rounded-box-link > h4')).toHaveText(that.data.caption);
    });
  });
});