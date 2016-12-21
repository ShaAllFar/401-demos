'use strict';

const num = 1;

logger(num);

console.log('num:', num);


function logger(number){
  number++;
  console.log('logger:', number);
}

// logger: 2
// num: 1
