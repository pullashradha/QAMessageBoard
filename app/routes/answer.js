import Ember from 'ember';

export default Ember.Route.extend ({
  answerAuthor: DS.attr(),
  answerDate: DS.attr(),
  answer: DS.attr()
});
