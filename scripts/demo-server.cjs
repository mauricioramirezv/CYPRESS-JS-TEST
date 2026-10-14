const { createServer } = require('node:http');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');

function createDemoServer() {
  const html = readFileSync(join(__dirname, '../demo_app/index.html'));
  return createServer((req, res) => {
    const path = new URL(req.url, 'http://localhost').pathname;
    res.setHeader('X-Content-Type-Options', 'nosniff');
    if (req.method === 'GET' && (path === '/' || path === '/index.html')) {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(html);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('No encontrado');
    }
  });
}

if (require.main === module) {
  const port = Number(process.env.PORT || 4173);
  createDemoServer().listen(port, '127.0.0.1', () => {
    console.log(`Laboratorio: http://127.0.0.1:${port}`);
  });
}

module.exports = { createDemoServer };
