import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    create(){
      this.set('model.new_team.phone', this.get('currentPhone'));
      this.get('model.new_team').save().then(() =>{
        return this.transitionToRoute('/teams')
      })
    }
  }
});
