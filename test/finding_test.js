//const mocha     = require('mocha'); // neglect that
const assert    = require('assert');
const MarioChar = require('../models/mariochar.js');



describe('Finding records from the database', function(){
  var char;
  beforeEach(function(done){
    char = new MarioChar({
      name:'gamweb',
      weight: 40
    });

    char.save().then(function(){
      assert(char.isNew === false);
      done();
    });
  });

  it('finding one record from the database', function(done){

      MarioChar.findOne({name:'gamweb'}).then(function(result){
        assert(result.name === 'gamweb') ;
        done();
      });

  });

  it('finding one record by id from the database', function(done){

      MarioChar.findOne({_id:char._id}).then(function(result){
        assert(result._id.toString() === char._id.toString()) ;
        done();
      });

  });
});
