'use strict';

const chai = require('chai');
const { expect } = chai;
const spies = require('chai-spies');

const Hokodo = require('../../src/client').Client;

describe('Scores Resource', () => {
  before(() => {
    chai.use(spies);
  });
  describe('customer', () => {
    it('sends the correct request', async () => {
      const hokodo = new Hokodo({ token: 'TOKEN', url: 'URL' });
      chai.spy.on(hokodo, 'post', () => {
        return {};
      });
      const result = await hokodo.scores.get();
      expect(result).to.deep.equal({});
      expect(hokodo.post).to.have.been.called();
      expect(hokodo.post).to.have.been.called.with('/scores');
    });
  });
});
