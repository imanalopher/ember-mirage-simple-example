import { test } from 'qunit';
import moduleForAcceptance from 'mob-office/tests/helpers/module-for-acceptance';
import Ember from 'ember'
moduleForAcceptance('Acceptance | create team');

test('teams/new route works', function(assert) {
  visit('/teams/new');

  andThen(function() {
    assert.equal(currentURL(), '/teams/new');
  });
});

test('can create team', function (assert){
  server.logging = true;

  server.createList('phone', 5)
  visit('/teams/new');
  andThen(function (){
    fillIn('.email', 'nick@gembani.com');
    click('.phone-list > md-radio-button:nth-child(2)');
  });
  andThen(function (){
    click('button');
  });
  andThen(function (){
    assert.equal(currentURL(), '/teams');
    assert.equal(Ember.$('.team-list > li').length, 1)
  })


});
