import Ember from 'ember';

export default Ember.Component.extend ({
  newAnswerForm: false,
  actions: {
    model() {
      this.set("newAnswerForm", true);
    },
    saveAnswer(answer) {
      var params = {
        answerAuthor: this.get("answerAuthor");
        answerDate: this.get("answerDate");
        answer: this.get("answer");
      };
      this.set("newAnswerForm", false);
      this.sendAction(params, "saveAnswer");
    }
  }
});
