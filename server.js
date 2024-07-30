const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = process.env.PORT || 1234;

// Serve static files from the Parcel build
app.use(express.static(path.join(__dirname, 'dist')));

// Proxy API requests
app.use('/dapi', createProxyMiddleware({
  target: 'https://www.swiggy.com',
  changeOrigin: true,
  pathRewrite: {
    '^/dapi': '/dapi', // strip `/dapi` prefix when forwarding
  },
}));

// Serve index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
