'use strict';

//organizing your application depedencies and logic
//1 - native node modules
//2 - npm modules
//3 - custom app modules
//4 - module constants
//5 - module logic

const fs = require('fs');

fs.readFile(`${__dirname}/data/data.txt`,'utf8',  function(err,data){
  if(err) throw err;
  console.log('content:', data);
});
