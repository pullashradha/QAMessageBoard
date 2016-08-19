import Ember from 'ember';

export default Ember.Component.extend ({
  addNewQuestion: false,
  actions: {
    showNewQuestionForm() {
      this.set("addNewQuestion", true);
    },
    saveQuestion() {
      var params = {
        question: this.get("question"),
        questionAuthor: this.get("questionAuthor"),
        questionDate: this.get("questionDate"),
        notes: this.get("notes")
      };
      this.set("addNewQuestion", false);
      this.sendAction("saveQuestion", params);
    }
  }
});
