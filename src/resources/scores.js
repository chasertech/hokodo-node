class Scores {
  constructor(client) {
    this.client = client;
  }
  get(params, f) {
    return this.client.post('/scores', params, f);
  }
}

module.exports = {
  Scores,
};
