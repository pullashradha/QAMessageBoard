import Ember from 'ember';

export default Ember.Component.extend ({
  editQuestionForm: false,
  actions: {
    showEditQuestionForm() {
      this.set("editQuestionForm", true);
    },
    editQuestion(question) {
      var params = {
        questionContent: this.get("questionContent"),
        questionAuthor: this.get("questionAuthor"),
        questionDate: this.get("questionDate"),
        notes: this.get("notes")
      };
      this.set("editQuestionForm", false);
      this.sendAction("editQuestion", question, params);
    }
  }
});
