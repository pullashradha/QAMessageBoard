import DS from 'ember-data';

export default DS.Model.extend ({
  question: DS.attr(),
  questionAuthor: DS.attr(),
  questionDate: DS.attr(),
  notes: DS.attr()
});
