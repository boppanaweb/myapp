import Component from '@ember/component';

export default Component.extend({
  actions: {
    deleteQuestion(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('deleteQuestion', question);
      }
    },
    updateQuestion(question, params) {
      this.sendAction('updateQuestion', question, params);
    },
    saveAnswer(answer, params) {
      this.sendAction('saveAnswer', answer, params);
    },
    deleteAnswer(answer) {
      this.sendAction('deleteAnswer', answer);
    },
    updateAnswer(answer, params) {
      this.sendAction('updateAnswer', answer, params);
    }
  }
});
