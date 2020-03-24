class Countries {
  constructor(client) {
    this.client = client;
  }
  customer(params = {}, f) {
    return this.client.get('/countries/customer', params, f);
  }
  debtor(params = {}, f) {
    return this.client.get('/countries/debtor', params, f);
  }
}

module.exports = {
  Countries,
};
