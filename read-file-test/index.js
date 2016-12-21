'use strict';

const fs = require('fs');

fs.readFile(`${__dirname}/data/data.txt`,function(err, data){
  if(err) throw err;
  console.log('original content:', data.toString());

  fs.writeFile(`${__dirname}/data/new-data.txt`, data, function(err,data){
    if(err) throw err;
    console.log('write file message:', 'new file created');
  })
});
