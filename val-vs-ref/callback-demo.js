'use strict';

//standard callback pattern
var someCallback = function(data){
  console.log('got some data:', data);
};

var useCallback = function(cb){
  cb('the data that i wanted to get');
};

// useCallback(someCallback);

// got some data: the data that i wanted to get


//error first callback pattern

var someCallback = function(err, data){
  if(err) throw err;
  console.log('got some data:', data);
}

var useCallback = function(cb){
  cb(null,'the data that i wanted to get');
};

// useCallback(someCallback);
// got some data: the data that i wanted to get


// var someCallback = function(err,data){
//   if(err) throw err;
//   console.log('got some data:', data);
// };
//
// var useCallback = function(cb){
//   var sampleError = new Error('throw a simple error');
//   cb(sampleError, 'the data i wanted to get');
// }

useCallback(someCallback);
