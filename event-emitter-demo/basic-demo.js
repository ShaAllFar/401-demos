'use strict';

const EE = require('events');
const ee = new EE();

ee.on('customEvent', function(){
  console.log('message:','custom event fired');
});

// ee.emit('customEvent');

ee.on('anotherCustomEvent', function(){
  ee.emit('customEvent');
  console.log('message', 'another custom event')
});

ee.emit('anotherCustomEvent');
