'use strict';

const chai = require('chai');
const { expect } = chai;
const spies = require('chai-spies');

const Hokodo = require('../../src/client').Client;

describe('Countries Resource', () => {
  before(() => {
    chai.use(spies);
  });
  describe('customer', () => {
    it('sends the correct request', async () => {
      const hokodo = new Hokodo({ token: 'TOKEN', url: 'URL' });
      chai.spy.on(hokodo, 'get', () => {
        return {};
      });
      const result = await hokodo.countries.customer();
      expect(result).to.deep.equal({});
      expect(hokodo.get).to.have.been.called();
      expect(hokodo.get).to.have.been.called.with('/countries/customer');
    });
  });
  describe('debtor', () => {
    it('sends the correct request', async () => {
      const hokodo = new Hokodo({ token: 'TOKEN', url: 'URL' });
      chai.spy.on(hokodo, 'get', () => {
        return {};
      });
      const result = await hokodo.countries.debtor();
      expect(result).to.deep.equal({});
      expect(hokodo.get).to.have.been.called();
      expect(hokodo.get).to.have.been.called.with('/countries/debtor');
    });
  });
});
