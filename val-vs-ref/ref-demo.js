'use strict';

const course = {title: 'Code 401 JS',instructor: 'Brian'};

logger(course);

console.log('Course: ', course);

function logger(c){
  c.title = 'Code 401 python';
  console.log('logger: ', c);
}

// logger:  { title: 'Code 401 python', instructor: 'Brian' }
// Course:  { title: 'Code 401 python', instructor: 'Brian' }
