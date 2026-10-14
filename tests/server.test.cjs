const { test } = require('node:test');
const assert = require('node:assert/strict');
const { createDemoServer } = require('../scripts/demo-server.cjs');

test('sirve la aplicación local y rechaza rutas desconocidas', async () => {
  const server = createDemoServer();
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  try {
    const base = `http://127.0.0.1:${server.address().port}`;
    const response = await fetch(base);
    assert.equal(response.status, 200);
    assert.match(response.headers.get('content-type'), /text\/html/);
    assert.match(await response.text(), /Laboratorio Cypress/);
    assert.equal((await fetch(base + '/desconocida')).status, 404);
  } finally {
    await new Promise(resolve => server.close(resolve));
  }
});
