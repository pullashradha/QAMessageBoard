import DS from 'ember-data';

export default DS.Model.extend ({
  questionAuthor: DS.attr(),
  questionDate: DS.attr(),
  question: DS.attr(),
  notes: DS.attr()
});
