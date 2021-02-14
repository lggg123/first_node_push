const url = require('url');

const address = 'http://localhost:3000'

const parseUrl = new URL(address);

console.log(parseUrl.host);

