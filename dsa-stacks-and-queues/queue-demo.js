'use strict';

//queue constructor
function Queue(){
  this.next = null;
  this.length = 0;
};


//add an element to the queue
Queue.prototype.enqueue = function(value){
  this[this.length] = value;
  if(!this.next) this.next = 0;
  this.length++;
}

Queue.prototype.dequeue = function(){
  if(this.length === 0) return;
  --this.length;
  let result = this[this.next];
  delete this[this.next];
  this.next++;
  return result; 
}

let nums = new Queue();

nums.enqueue('first');
nums.enqueue('second');
nums.enqueue('third');
console.log('current queue:', nums);


console.log('\nremoved:', nums.dequeue(), 'element from the queue');
console.log(nums);
