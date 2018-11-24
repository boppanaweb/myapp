import Component from '@ember/component';
import $ from 'jquery'

var clearAvatarChoice = function() {
  $("#pickFrisk").removeClass("selected-avatar");
  $("#pickSans").removeClass("selected-avatar");
  $("#pickPapyrus").removeClass("selected-avatar");
  $("#pickGaster").removeClass("selected-avatar");
};

export default Component.extend({
  updateAnswerForm: false,
  actions: {
    pickFrisk() {
      clearAvatarChoice();
      this.set('image', "http://i.imgur.com/N14lLz7.jpg");
      this.set('author', "Frisk");
      $("#pickFrisk").addClass("selected-avatar");
    },
    pickSans() {
      clearAvatarChoice();
      this.set('image', "http://i.imgur.com/bcParR1.jpg");
      this.set('author', "Sans");
      $("#pickSans").addClass("selected-avatar");
    },
    pickPapyrus() {
      clearAvatarChoice();
      this.set('image', "http://i.imgur.com/KOKa2ij.jpg");
      this.set('author', "Papyrus");
      $("#pickPapyrus").addClass("selected-avatar");
    },
    pickGaster() {
      clearAvatarChoice();
      this.set('image', "http://i.imgur.com/HG1ELlA.jpg");
      this.set('author', "Gaster");
      $("#pickGaster").addClass("selected-avatar");
    },
    updateAnswerForm() {
      this.set('updateAnswerForm', true);
    },
    updateAnswer(answer) {
      var params = {
        author: this.get('author'),
        image: this.get('image'),
        content: this.get('content'),
      };
      this.set('updateAnswerForm', false);
      this.sendAction('updateAnswer', answer, params);
    }

  }
});