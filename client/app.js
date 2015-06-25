Template.words.helpers({
  words: function() {
    return Words.find();
  }
});

Template.sentences.helpers({
  sentences: function() {
    return Sentences.find({word: this._id});
  }
});

Template.createWord.events({
  'submit form': function(e) {
    e.preventDefault();
    var word = {
      word: $(e.target).find('[name=word]').val(),
      language: 'es'
    };
    $(e.target).find('[name=word]').val('');
    
    Words.insert(word);
  }
});

Template.createSentence.events({
  'submit form': function(e) {
    e.preventDefault();
    var sentence = {
      sentence: $(e.target).find('[name=sentence]').val(),
      word: this._id
    };
    $(e.target).find('[name=sentence]').val('');
    
    Sentences.insert(sentence);
  }
});