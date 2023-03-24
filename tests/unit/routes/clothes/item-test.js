import { module, test } from 'qunit';
import { setupTest } from 'basics/tests/helpers';

module('Unit | Route | clothes/item', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:clothes/item');
    assert.ok(route);
  });
});
