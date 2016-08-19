import Ember from 'ember';

export default Ember.Component.extend ({
  updateAnswerForm: false,
  actions: {
    showUpdateAnswerForm() {
      this.set("updateAnswerForm", true);
    },
    updateAnswer(answer) {
      var params = {
        answerAuthor: this.get("answerAuthor"),
        answerDate: this.get("answerDate"),
        answerContent: this.get("answerContent")
      };
      this.set("updateAnswerForm", false);
      this.sendAction("updateAnswer", answer, params);
    }
  }
});
