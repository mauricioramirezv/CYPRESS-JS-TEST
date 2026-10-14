const cypress = require('cypress');
const { createDemoServer } = require('./demo-server.cjs');

async function main() {
  const server = createDemoServer();
  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', resolve);
  });
  try {
    const result = await cypress.run({
      spec: 'cypress/e2e/local/**/*.cy.js',
      config: { baseUrl: `http://127.0.0.1:${server.address().port}` },
    });
    process.exitCode = result.status === 'failed' || result.totalFailed > 0 || !result.totalTests ? 1 : 0;
  } finally {
    await new Promise(resolve => server.close(resolve));
  }
}

main().catch(error => { console.error(error.message); process.exitCode = 1; });
