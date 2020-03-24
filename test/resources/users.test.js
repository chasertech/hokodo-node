'use strict';

const chai = require('chai');
const { expect } = chai;
const spies = require('chai-spies');

const Hokodo = require('../../src/client').Client;

describe('Users Resource', () => {
  before(() => {
    chai.use(spies);
  });
  describe('create', () => {
    it('sends the correct request', async () => {
      const hokodo = new Hokodo({ token: 'TOKEN', url: 'URL' });
      chai.spy.on(hokodo, 'post', () => {
        return {};
      });
      const result = await hokodo.users.create();
      expect(result).to.deep.equal({});
      expect(hokodo.post).to.have.been.called();
      expect(hokodo.post).to.have.been.called.with('/users');
    });
  });
  describe('get', () => {
    it('sends the correct request', async () => {
      const hokodo = new Hokodo({ token: 'TOKEN', url: 'URL' });
      chai.spy.on(hokodo, 'get', () => {
        return {};
      });
      const result = await hokodo.users.get();
      expect(result).to.deep.equal({});
      expect(hokodo.get).to.have.been.called();
      expect(hokodo.get).to.have.been.called.with('/users');
    });
  });
  describe('view', () => {
    it('sends the correct request', async () => {
      const hokodo = new Hokodo({ token: 'TOKEN', url: 'URL' });
      chai.spy.on(hokodo, 'get', () => {
        return {};
      });
      const result = await hokodo.users.view('USER_ID');
      expect(result).to.deep.equal({});
      expect(hokodo.get).to.have.been.called();
      expect(hokodo.get).to.have.been.called.with('/users/USER_ID');
    });
  });
  describe('update', () => {
    it('sends the correct request', async () => {
      const hokodo = new Hokodo({ token: 'TOKEN', url: 'URL' });
      chai.spy.on(hokodo, 'patch', () => {
        return {};
      });
      const result = await hokodo.users.update('USER_ID');
      expect(result).to.deep.equal({});
      expect(hokodo.patch).to.have.been.called();
      expect(hokodo.patch).to.have.been.called.with('/users/USER_ID');
    });
  });
});
