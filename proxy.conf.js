const { env } = require('process');

const target = 'http://localhost:8080';

const PROXY_CONFIG = [
  {
    context: [
      "/api/v1"
   ],
    target: target,
    secure: false,
    headers: {
      Connection: 'Keep-Alive'
    }
  }
]

console.log(PROXY_CONFIG)

module.exports = PROXY_CONFIG;
