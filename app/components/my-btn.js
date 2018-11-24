import Component from '@ember/component';

export default Component.extend({
            actions: {
               myClick: function() {
                   
                    this.sendAction('action', this.set('title', "using ember"));
               }
            }
});
