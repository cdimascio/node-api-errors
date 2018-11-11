const should = require('chai').should();
const { ApiError, badRequest } = require('../lib');

describe('Api Errors', () => {
  describe('#badRequest', () => {
    it('should return 400', () => {
      const e = badRequest();
      e.should.be.instanceof(Error);
      e.should.be.instanceof(ApiError);
      e.statusCode.should.equal(400);
      e.customError.message.should.equal('bad request');

      const json = e.toJSON();
      json.code.should.equal(400);
      json.message.should.equal('bad request');
      json.should.not.have.property('statusCode');
      json.should.not.have.property('statusKey');
    });
    it('should return json');
  });
});

describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      [1, 2, 3].should.be.an('array').with.length(3);
    });
  });
});
