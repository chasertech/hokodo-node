class Companies {
  constructor(client) {
    this.client = client;
  }
  search(params, f) {
    return this.client.post('/companies/search', params, f);
  }
  view(companyId, params = {}, f) {
    return this.client.get(`/companies/${companyId}`, params, f);
  }
}

module.exports = {
  Companies,
};
