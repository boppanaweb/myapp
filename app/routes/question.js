import Route from '@ember/routing/route';
import { all } from 'rsvp';

export default Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },

  actions: {
    deleteQuestion(question) {
      var answer_deletions = question
               .get('answers').map(function(answer) {
                     return answer.destroyRecord();
                });
      all(answer_deletions).then(function() {
        return question.destroyRecord();
      });
      this.transitionTo('index');
    },
    updateQuestion(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
    },
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', params.question);
    },
    deleteAnswer(answer) {
      answer.destroyRecord();
    },
    updateAnswer(answer, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          answer.set(key,params[key]);
        }
      });
      answer.save();
    }
  }
});
