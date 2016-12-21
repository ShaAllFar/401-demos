'use strict';

const greet = require('../lib/greet.js');
const expect = require('chai').expect;

describe('Greet Module', function(){
  describe('#sayHey', function(){
    it('should return What up, shawn!', function(){
      var result = greet.sayHey('shawn');
      expect(greet).to.have.property('sayHey');
      expect(result).to.equal('What up, shawn!');
    });
    it('should throw missing name error', function(){
      var result = greet.sayHey;
      expect(result).to.throw(Error);
    });
  });

  describe('#sayBye', function(){
    it('should return see ya later!', function(){
      var result = greet.sayBye();
      expect(result).to.equal('see ya later');
    });
  });
});
