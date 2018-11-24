import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('product', function() {
  	this.route("index");
  });
  this.route("about",{ path: "/about" });
  this.route('products', function() {
    this.route('new');
  });
  this.route("commits",function(){
    window.console.log("commits  --> Router.map() @ router.js") ;
    this.route("commits",{path:":sha"});
  });
  this.route('books', function() {
    this.route('book', {path:":id"});
     this.route('new');
       });
    this.route('question', {path: '/question/:question_id'});

});

export default Router;
