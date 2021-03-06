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
        answerContent: this.get("answerContent"),
        question: this.get("question")
      };
      this.set("addNewAnswer", false);
      this.sendAction("saveAnswer", params);
      this.set("answerAuthor", "");
      this.set("answerDate", "");
      this.set("answerContent", "");
    }
  }
});
