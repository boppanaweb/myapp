import Route from '@ember/routing/route';
import $ from 'jquery'; 

export default  Route.extend({
  model: function() {
    window.console.log("model() @ routes/commits/index.js");
    const url = 'https://api.github.com/repos/emberjs/ember.js/commits';
    return $.getJSON(url);
  }
});