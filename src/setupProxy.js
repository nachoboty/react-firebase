const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
  app.use(
    createProxyMiddleware('/bigquery/query', {
      target: 'http://localhost:4000',
      changeOrigin: true,
    })
  );
}