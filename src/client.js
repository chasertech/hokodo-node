/* eslint class-methods-use-this: ["error", { "exceptMethods": ["callback"] }] */

const unirest = require('unirest');
const Bluebird = require('bluebird');
const { Companies } = require('./resources/companies');
const { Scores } = require('./resources/scores');
const { Users } = require('./resources/users');
const { Countries } = require('./resources/countries');

const UA = 'hokodo-node';

class Client {
  constructor({ token, url }) {
    this.token = token;
    this.url = url;
    if (!this.token || this.token === undefined) {
      throw new Error('Missing token');
    }
    if (!this.url || this.url === undefined) {
      throw new Error('Missing url');
    }
    this.companies = new Companies(this);
    this.scores = new Scores(this);
    this.users = new Users(this);
    this.countries = new Countries(this);
    this.promises = false;
  }
  get(endpoint, data, f) {
    return this.promiseProxy(
      f,
      unirest
        .get(`${this.url}${endpoint}`)
        .type('json')
        .query(data)
        .header('Authorization', 'Token ' + this.token)
        .header('Accept', 'application/json')
        .header('User-Agent', UA),
    );
  }
  post(endpoint, data, f) {
    console.log('data:', data);
    return this.promiseProxy(
      f,
      unirest
        .post(`${this.url}${endpoint}`)
        .type('json')
        .send(data)
        .header('Accept', 'application/json')
        .header('User-Agent', UA),
    );
  }
  put(endpoint, data, f) {
    return this.promiseProxy(
      f,
      unirest
        .put(`${this.url}${endpoint}`)
        .type('json')
        .send(data)
        .header('Authorization', 'Token ' + this.token)
        .header('Accept', 'application/json')
        .header('User-Agent', UA),
    );
  }
  delete(endpoint, data, f) {
    return this.promiseProxy(
      f,
      unirest
        .delete(`${this.url}${endpoint}`)
        .type('json')
        .query(data)
        .header('Authorization', 'Token ' + this.token)
        .header('Accept', 'application/json')
        .header('User-Agent', UA),
    );
  }
  patch(endpoint, data, f) {
    return this.promiseProxy(
      f,
      unirest
        .patch(`${this.url}${endpoint}`)
        .type('json')
        .query(data)
        .header('Authorization', 'Token ' + this.token)
        .header('Accept', 'application/json')
        .header('User-Agent', UA),
    );
  }
  nextPage(paginationObject, f) {
    return this.promiseProxy(
      f,
      unirest
        .get(paginationObject.next)
        .type('json')
        .header('Authorization', 'Token ' + this.token)
        .header('Accept', 'application/json')
        .header('User-Agent', UA),
    );
  }
  usePromises() {
    this.promises = true;
    return this;
  }
  promiseProxy(f, req) {
    if (this.promises || !f) {
      const callbackHandler = this.callback;
      return new Bluebird((resolve, reject) => {
        const resolver = (err, data) => {
          if (err) {
            reject(new Error(JSON.stringify(err)));
          } else {
            resolve(data);
          }
        };
        req.end((r) => callbackHandler(resolver, r));
      });
    } else {
      req.end((r) => this.callback(f, r));
    }
  }
  callback(f, data) {
    if (!f) {
      return;
    }
    if (f.length >= 2) {
      const hasErrors =
        data.error || (data.body && data.body.type === 'error.list');
      if (hasErrors) {
        f(data, null);
      } else {
        f(null, data);
      }
    } else {
      f(data);
    }
  }
}

module.exports = {
  Client,
};
