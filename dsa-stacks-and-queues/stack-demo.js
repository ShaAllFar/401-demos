'use strict';

//stack constructor
function Stack(){
  this.length = 0;
};

//push an element onto the top of the Stack
Stack.prototype.push = function(value){
  this[this.length++] = value;
  return this;
}

//pop an element off the top of the Stack
Stack.prototype.pop = function(){
  if(this.length === 0) return;
  var result = this[--this.length];
  delete this[this.length];
  return result;
}

var nums = new Stack();

console.log('\npush 10', nums.push(10));
console.log('push 20', nums.push(20));
console.log('push 30', nums.push(30));

console.log('\npop off last item:', nums.pop(), 'popped of the stack');
console.log('\ncurrent stack:',nums);
