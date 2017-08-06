const assert    = require('assert');
const MarioChar = require('../models/mariochar.js');

describe('Updating records from the database', function(){

  beforeEach(function(){

    var char;

    char =new MarioChar({
      name:'gamweb',
      weight:55
    });
    char.save().then(function(){
    });

  });

  it('Updating records from the database', function(){
    MarioChar.findOneAndUpdate({name:'gamweb'}, {name:'gamwebdev'}).then(function(){
      MarioChar.findOne({_id:char.id}).then(function(result){
        assert(result.name !== char.name);
        done();
      });
    });
  });

});
