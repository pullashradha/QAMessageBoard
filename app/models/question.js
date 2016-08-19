import DS from 'ember-data';

export default DS.Model.extend ({
  questionContent: DS.attr(),
  questionAuthor: DS.attr(),
  questionDate: DS.attr(),
  notes: DS.attr(),
  answers: DS.hasMany("answer", {async: true})
});
