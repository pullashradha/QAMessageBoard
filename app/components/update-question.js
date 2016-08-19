import Ember from 'ember';

export default Ember.Component.extend ({
  updateQuestionForm: false,
  actions: {
    showUpdateQuestionForm() {
      this.set("updateQuestionForm", true);
    },
    updateQuestion(question) {
      var params = {
        questionContent: this.get("questionContent"),
        questionAuthor: this.get("questionAuthor"),
        questionDate: this.get("questionDate"),
        notes: this.get("notes")
      };
      this.set("updateQuestionForm", false);
      this.sendAction("updateQuestion", question, params);
    }
  }
});
