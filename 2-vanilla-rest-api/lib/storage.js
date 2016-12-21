'use strict';

const Promise = require('bluebird');
const fs  = Promise.promisifyAll(require('fs'),{suffix: 'Prom'});

const storage = {};

module.exports = exports = {};

exports.createItem = function(schemaName,item){
  if(!schemaName) return Promise.reject(new Error('expected schema name'));
  if(!item) return Promise.reject(new Error('expected an item'));

  let json = JSON.stringify(item);
  return fs.writeFileProm(`${__dirname}/../data/${schemaName}/${item.id}.json`, json)
  .then( () => item)//then function item return item
  .catch( err => Promise.reject(err));
};

exports.fetchItem = function(schemaName, id){
  if(!schemaName) return Promise.reject(new Error('expected schema'));
  if(!id) return Promise.reject(new Error('expected id'));

  return fs.readFileProm(`${__dirname}/../data/${schemaName}/${id}.json`)
  .then(data => {
      let item = JSON.parse(data.toString());
      return item;
  })
  .catch(err => Promise.reject(err));
};
