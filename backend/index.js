const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  debugger; // Debugger statement
  console.log('Ini adalah permintaan request untuk "/"');
  console.log('Selamat Datang');
  res.send('Selamat Datang');
});

app.get('/kelas', (req, res) => {
  console.log('Ini adalah permintaan request untuk "/kelas"');
  res.send('Ini adalah halaman kelas');
});

app.get('/about', (req, res) => {
  console.log('Ini adalah permintaan request untuk "/about"');
  res.send('Ini adalah halaman about');
});

app.listen(port, () => {
  console.log(`Server ini berjalan di port ${port}!`);
});
