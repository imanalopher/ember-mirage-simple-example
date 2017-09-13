import { test } from 'qunit';
import moduleForAcceptance from 'mob-office/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | create team');

test('teams/new route works', function(assert) {
  visit('/teams/new');

  andThen(function() {
    assert.equal(currentURL(), '/teams/new');

  });
});
