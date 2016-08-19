import Ember from 'ember';

export default Ember.Route.extend ({
  questionAuthor: DS.attr(),
  questionDate: DS.attr(),
  question: DS.attr(),
  notes: DS.attr()
});
