import Route from '@ember/routing/route';
import $ from 'jquery';

export default Route.extend({
  model: function(params){
    window.console.log("model() @ routes/commits/commits.js");
    var url = 'https://api.github.com/repos/emberjs/ember.js/commits/'+ params.sha;
    return $.getJSON(url);
    
  }

});