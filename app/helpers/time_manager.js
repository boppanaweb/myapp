import EmberObject, { computed } from '@ember/object';
import { observer } from '@ember/object';

export default EmberObject.extend({
   time:0,
   timeChanged: observer('time', function (){  // an observer.
     console.log('time changed');
   })

 });
 