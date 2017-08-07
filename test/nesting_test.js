const mongoose = require('mongoose');
const assert   = require('assert');
const Author   = require('../models/author.js');

describe('Nesting Test Records', function(){

  it('Creates an Author with sub-documents', function(done){
    var pat = new Author({
      name  : 'Patrick',
      age   : 20,
      books : [{title : 'Brief History of Times', pages : 200}]
    });

    pat.save().then(function(){
      Author.findOne({name : 'Patrick'}).then(function(result){
        assert(result.books.length === 1);
        done();
      });
    });
  });

});
