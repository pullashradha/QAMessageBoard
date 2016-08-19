import Ember from 'ember';

export default Ember.Component.extend ({
  newQuestionForm: false,
  actions: {
    model() {
      this.set("newQuestionForm", true);
    },
    saveQuestion(question) {
      var params = {
        questionAuthor: this.get("questionAuthor"),
        questionDate: this.get("questionDate"),
        question: this.get("question"),
        notes: this.get("notes")
      };
      this.set("newQuestionForm", false);
      this.sendAction(params, "saveQuestion");
    }
  }
});
