import Ember from 'ember';

export default Ember.Component.extend ({
  addNewAnswer: false,
  actions: {
    showNewAnswerForm() {
      this.set("addNewAnswer", true);
    },
    saveAnswer() {
      var params = {
        answerAuthor: this.get("answerAuthor"),
        answerDate: this.get("answerDate"),
        answer: this.get("answer"),
        question: this.get("question")
      };
      this.set("addNewAnswer", false);
      this.sendAction("saveAnswer", params);
    }
  }
});
