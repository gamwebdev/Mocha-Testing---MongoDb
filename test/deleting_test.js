//const mocha     = require('mocha'); // neglect that
const assert    = require('assert');
const MarioChar = require('../models/mariochar.js');



describe('Removing records from the database', function(){
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

  it('Removing one record from the database', function(done){
    MarioChar.findOneAndRemove({name:'gamwebdev'}).then(function(){
      MarioChar.findOne({name:'gamwebdev'}).then(function(result){
        assert(result === null);
        done();
      });

    });
  });


  });
