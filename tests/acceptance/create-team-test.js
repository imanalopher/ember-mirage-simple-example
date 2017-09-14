import { test } from 'qunit';
import moduleForAcceptance from 'mob-office/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | create team');

test('teams/new route works', function(assert) {
  visit('/teams/new');

  andThen(function() {
    assert.equal(currentURL(), '/teams/new');
  });
});

test('can create team', function (assert){
  visit('/teams/new');
  andThen(function (){
    fillIn('.email', 'nick@gembani.com');
    click('.phone-list > md-radio-button:nth-child(2)');
  });
  andThen(function (){
    // debugger;
  })

});
