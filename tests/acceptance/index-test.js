import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupQunit as setupPolly } from '@pollyjs/core';

module('Acceptance | index', function(hooks) {
  setupApplicationTest(hooks);
  setupPolly(hooks, {
    /* default configuration options */
  });

  test('visiting /index', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
  });
});
