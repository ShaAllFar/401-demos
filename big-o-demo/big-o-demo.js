'use strict'

// n of 4
var nums = [1,2,3,4];
// O(n)
function contains(input,find){
  for(var i =0; i < input.length; i++){
    if(input[i]===find)return true;
  }
  return false;
}

console.log('contains 2', contains(nums,2));
console.log('contains 28', contains(nums, 28));

// n of 5
var colors = {
  red: '#ff0000',
  green: '#00ff00',
  blue: '#0000ff',
  white: '#ffffff',
  black: '#000000'
}

// O(1)
function match(input, find){
  if(input[find]) return true;
  return false;
}

console.log('matches red', match(colors,'red'));
console.log('matches orange', match(colors, 'orange'));

// O(n ^ 2)
var dates = [
  new Date('03-12-2016'),
  new Date('06-06-1986'),
  new Date('03-23-1944'),
  new Date('08-11-1956'),
  new Date('12-31-1900')
]

function selectionSort(array){
  for (var i=0; i < array.length; i++){
    var minIndex = i;
    for (var j = i +1; j < array.length; j++){
      if(array[j] < array[minIndex]){
        minIndex = j;
      }
    }
    if(minIndex != i){
      var temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }
  return array;
}

console.dir(selectionSort(dates));
