class Users {
  constructor(client) {
    this.client = client;
  }
  create(params, f) {
    return this.client.post('/users', params, f);
  }
  get(params, f) {
    return this.client.get('/users', params, f);
  }
  view(userId, params = {}, f) {
    return this.client.get(`/users/${userId}`, params, f);
  }
  update(userId, params = {}, f) {
    return this.client.patch(`/users/${userId}`, params, f);
  }
}

module.exports = {
  Users,
};
