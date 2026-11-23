const { test } = require('node:test');
const assert = require('node:assert');
const app = require('../app');

test('says Hello from GoDaddy', async () => {
  const server = app.listen(0);
  const { port } = server.address();
  try {
    const api = await fetch(`http://127.0.0.1:${port}/api/hello`).then(r => r.json());
    assert.strictEqual(api.message, 'Hello from GoDaddy');

    const page = await fetch(`http://127.0.0.1:${port}/`).then(r => r.text());
    assert.match(page, /Hello from GoDaddy/);
  } finally {
    server.close();
  }
});
