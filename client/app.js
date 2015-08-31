Template.words.helpers({
  words: function() {
    return Words.find();
},

});

Template.word.helpers({
    username: function() {
        return Meteor.users.findOne(this.user).username;
    }
})

Template.sentences.helpers({
  sentences: function() {
    return Sentences.find({word: this._id});
  }
});

Template.createWord.events({
  'submit form': function(e) {
    e.preventDefault();
    var word = {
      translations: {
          en: $(e.target).find('[name=en]').val(),
          es: $(e.target).find('[name=es]').val()
      },
      user: Meteor.userId()
    };
    $(e.target).find('[name=en]').val('');
    $(e.target).find('[name=es]').val('');

    Words.insert(word);
  }
});

Template.createSentence.events({
  'submit form': function(e) {
    e.preventDefault();
    var sentence = {
      sentence: $(e.target).find('[name=sentence]').val(),
      word: this._id,
      user: Meteor.userId(),
      word_language: 'es',
      sentence_language: 'es'
    };
    $(e.target).find('[name=sentence]').val('');

    Sentences.insert(sentence);
  }
});
