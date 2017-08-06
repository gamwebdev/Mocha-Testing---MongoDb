//const mocha     = require('mocha'); // neglect that
const assert    = require('assert');
const MarioChar = require('../models/mariochar.js');



describe('Finding records from the database', function(){
  var char;
  beforeEach(function(done){
    char = new MarioChar({
      name:'gamweb',
      weight: 55
    });

    char.save().then(function(){
      assert(char.isNew === false);
      done();
    });
  });

  it('Updating records from the database', function(done){
    MarioChar.findOneAndUpdate({name:'gamweb'}, {name:'gamwebdev'}).then(function(){
      MarioChar.findOne({_id:char._id}).then(function(result){
        assert(result.name === 'gamwebdev');
        done();
      });
    });
  });

  it('Adds 1 to the weight of every record', function(){ // no done is required
     MarioChar.update({}, { $inc: { weight: 1 } }).then(function(done){ // here done may be required
         MarioChar.findOne({name: 'gamweb'}).then(function(record){
             assert(record.weight === 51);
             done();
         });
     });
  });

});
