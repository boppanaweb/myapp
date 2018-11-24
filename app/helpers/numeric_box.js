// ./helpers/numeric_box.js

import EmberObject from '@ember/object';
import validNumberMixin from '../mixin/valid_number';
import focusableMixin from '../mixin/focusable';

export default EmberObject.extend(validNumberMixin,focusableMixin,{
   text:""
});