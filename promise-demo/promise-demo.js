'use strict';

function bigNumber(number){
  return new Promise(function(resolve, reject){
    if(number < 100){
      reject(new Error('expected a big number'));
    }
    if(number > 100){
      return resolve(number);
    }
  });
};

function success(result){
  console.log('result:', result);
}
function throwError(error){
  console.log('error:', error);
}
// console.log(bigNumber(200));
// bigNumber(200).then(success);
// bigNumber(200).then(success).catch(throwError);
bigNumber(10).then(success).catch(throwError);
