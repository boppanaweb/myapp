import Component from '@ember/component';

export default Component.extend({

    init(){
        this._super(...arguments);
        window.console.log('----------------- In Component -----------------');
        window.console.log('init');
      },
    
      didUpdateAttrs() {
        this._super(...arguments); 
        window.console.log('didUpdateAttrs', arguments);
      },
    
      willUpdate(options) {
        window.console.log('willUpdate', options);
      },
    
      didReceiveAttrs() {
        window.console.log('didReceiveAttrs');
      },
    
      willRender() {
        window.console.log('willRender');
      },
    
      didRender() {
        window.console.log('didRender');
      },
    
      didInsertElement() {
        window.console.log('didInsertElement');
      },
    
      didUpdate(options) {
        window.console.log('didUpdate', options);
      }
});