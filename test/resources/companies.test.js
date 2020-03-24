'use strict';

const chai = require('chai');
const { expect } = chai;
const spies = require('chai-spies');

const Hokodo = require('../../src/client').Client;

describe('Companies Resource', () => {
  before(() => {
    chai.use(spies);
  });
  describe('search', () => {
    it('sends the correct request', async () => {
      const hokodo = new Hokodo({ token: 'TOKEN', url: 'URL' });
      chai.spy.on(hokodo, 'post', () => {
        return {};
      });
      const result = await hokodo.companies.search();
      expect(result).to.deep.equal({});
      expect(hokodo.post).to.have.been.called();
      expect(hokodo.post).to.have.been.called.with('/companies/search');
    });
  });
  describe('view', () => {
    it('sends the correct request', async () => {
      const hokodo = new Hokodo({ token: 'TOKEN', url: 'URL' });
      chai.spy.on(hokodo, 'get', () => {
        return {};
      });
      const result = await hokodo.companies.view('COMPANY_ID');
      expect(result).to.deep.equal({});
      expect(hokodo.get).to.have.been.called();
      expect(hokodo.get).to.have.been.called.with('/companies/COMPANY_ID');
    });
  });
});
