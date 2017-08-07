const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var hooks = require('hooks');

before(function(done){
  mongoose.connect('mongodb://localhost/testaroo', { useMongoClient: true });
  mongoose.connection.once('open', function(){
    console.log('connection has been made successfully');
    done();
  }).on('error', function(error){
    console.log('connection has been terminated');
  });
});

beforeEach(function(done){
  mongoose.connection.collections.mariochars.drop(function(){
    done();
  });
});
