import Ember from 'ember';

export default Ember.Component.extend ({
  actions: {
    updateAnswer(answer, params) {
      this.sendAction("updateAnswer", answer, params);
    }
  }
});
