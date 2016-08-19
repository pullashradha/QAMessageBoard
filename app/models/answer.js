import DS from 'ember-data';

export default DS.Model.extend ({
  answerAuthor: DS.attr(),
  answerDate: DS.attr(),
  answer: DS.attr()
});
