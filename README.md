# Hokodo

> Hokodo API wrapper

https://www.hokodo.co/
https://hokodo.docs.apiary.io/#introduction/getting-started

## Installation

```bash
npm install hokodo-node
yarn add hokodo-node
```

## Testing

```bash
npm test
yarn test
```

## Usage

```node
const Hokodo = require('hokodo').Client;
const hokodo = new Hokodo({
  token: 'REPLACE_WITH_SECRET_TOKEN',
  url: 'REPLACE_WITH_API_ENDPOINT',
});
```
