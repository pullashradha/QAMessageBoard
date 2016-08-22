import Ember from 'ember';

export default Ember.Route.extend ({
  model() {
    return Ember.RSVP.hash ({
      questions: this.store.findAll("question") //No need to connect answers through index.js because answers already connected to questions via models
    });
  },
  actions: {
    saveQuestion(params) {
      var newQuestion = this.store.createRecord("question", params);
      newQuestion.save();
      this.transitionTo("index");
    }
  }
});
