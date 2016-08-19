import Ember from 'ember';

export default Ember.Component.extend ({
  addNewQuestion: false,
  actions: {
    showNewQuestionForm() {
      this.set("addNewQuestion", true);
    },
    saveQuestion() {
      var params = {
        questionAuthor: this.get("questionAuthor"),
        questionDate: this.get("questionDate"),
        question: this.get("question"),
        notes: this.get("notes")
      };
      this.set("addNewQuestion", false);
      this.sendAction("saveQuestion", params);
    }
  }
});
