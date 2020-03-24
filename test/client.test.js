'use strict';

const { expect } = require('chai');

const Hokodo = require('../src/client').Client;

describe('Client', () => {
  describe('constructor', () => {
    it('throws missing token error', () => {
      expect(() => new Hokodo({})).to.throw('Missing token');
    });
    it('throws missing url error', () => {
      expect(() => new Hokodo({ token: 'TOKEN' })).to.throw('Missing url');
    });
    it('creates client', () => {
      const hokodo = new Hokodo({ token: 'TOKEN', url: 'URL' });
      expect(hokodo.token).to.equal('TOKEN');
      expect(hokodo.url).to.equal('URL');
      expect(hokodo).to.have.property('companies');
      expect(hokodo).to.have.property('scores');
      expect(hokodo).to.have.property('users');
      expect(hokodo).to.have.property('countries');
    });
  });
});
