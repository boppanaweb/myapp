import EmberObject from '@ember/object';
import { alias } from '@ember/object/computed';

export default EmberObject.extend({
  school:'',
  father:null,
  address: alias('father.address')
});
