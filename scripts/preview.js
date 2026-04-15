// Local preview server — mirrors Cloudflare Pages routing for the single PT-BR bundle
const express = require('express');
const path = require('path');

const app = express();
const base = path.join(__dirname, '..', 'dist', 'akroma-spark', 'browser');

app.use(express.static(base));
app.get('*', (_req, res) => res.sendFile(path.join(base, 'index.html')));

const PORT = 4201;
app.listen(PORT, () => console.log(`Spark preview on http://localhost:${PORT}`));
