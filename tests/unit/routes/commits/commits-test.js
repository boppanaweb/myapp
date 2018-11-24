import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | commits/commits', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:commits/commits');
    assert.ok(route);
  });
});
