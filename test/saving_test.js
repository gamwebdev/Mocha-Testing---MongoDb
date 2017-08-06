//const mocha     = require('mocha'); // neglect that
const assert    = require('assert');
const MarioChar = require('../models/mariochar.js');

describe('Saving records on the database', function(){
  it('saving to mariochar model database', function(done){

    var char = new MarioChar({
      name:'gamweb',
      weight: 40
    });

    char.save().then(function(){
      assert(char.isNew === false);
      done();
    });

  });
});
