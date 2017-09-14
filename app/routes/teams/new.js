import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      phone_list: this.get('store').findAll('phone'),
      new_team: this.get('store').createRecord('team')
    });
  }
});
