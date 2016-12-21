'use strict';

const http = require('http');
const url = require('url');
const querystring = require('querystring');
const cowsay = require('cowsay');
const parseBody = require('./lib/parse-body.js');
const PORT = process.env.port || 3000;

const server = http.createServer(function(req,res){
  // console.log('request', req);
  req.url = url.parse(req.url);
  req.url.query = querystring.parse(req.url.query);

  // console.log('request url:' , req.url);
  // console.log('request query', req.url.query);
  // console.log('request method:',req.method);
  if(req.method === 'POST'){
    //TODO: build body parser
    parseBody(req,function(err){
      if(err) console.error(err);
      console.log('POST request body', req.body);
    });
  }


  if(req.method === 'GET' && req.url.pathname ==='/cowsay'){
    // console.log('you have made a GET request');
    res.write(cowsay.say({
      text: 'hello from cowville'
    }));
    res.end();
  }
  res.end();
});

server.listen(PORT, () => {
  console.log('Serve Up:', PORT);
})
