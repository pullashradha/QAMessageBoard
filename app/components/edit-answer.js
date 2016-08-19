import Ember from 'ember';

export default Ember.Component.extend ({
  editAnswerForm: false,
  actions: {
    showEditAnswerForm() {
      this.set("editAnswerForm", true);
    },
    editAnswer(answer) {
      var params = {
        answerAuthor: this.get("answerAuthor"),
        answerDate: this.get("answerDate"),
        answerContent: this.get("answerContent")
      };
      this.set("editAnswerForm", false);
      this.sendAction("editAnswer", answer, params);
    }
  }
});
